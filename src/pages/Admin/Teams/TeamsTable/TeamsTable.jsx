import React, { useState, useEffect, useRef } from "react";
import { useDispatch,useSelector  } from "react-redux";
import { setSelectedTeamForEdit, setSelectedTeamForDelete } from "../../../../redux/actions/teamActions";
import { SmallTextButton } from "../../../../components/Buttons/index";
import { ReactComponent as ArrowLeft } from "../../../../assets/left-arrow.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/right-arrow.svg";
import { ReactComponent as DropdownArrow } from "../../../../assets/drop_icon.svg";
import { ReactComponent as TrashIcon } from "../../../../assets/garbageicon.svg";
import * as Styled from "./styled";

export const TeamTable = ({ filteredTeams, isFiltering }) => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams);
  const locations = useSelector((state) => state.team.locations);
  const categories = useSelector((state) => state.ia.categories);
  
  const subcategories = useSelector((state) => state.ia.subcategories);
  const getLocationName = (locationID) => {
    const location = locations.find((loc) => loc.LocationID === locationID);
    return location ? location.LocationName : "Unknown Location";
  };

  const getCategoryName = (sportID) => {
    const category = categories.find((cat) => cat.SportID === sportID);
    return category ? category.SportName : "Unknown Category";
  };

  const getSubcategoryName = (leagueID) => {
    const subcategory = subcategories.find(
      (subcat) => subcat.LeagueID === leagueID
    );
    return subcategory ? subcategory.LeagueName : "Unknown Subcategory";
  };

  const getCoordinatesByLocationId = (locationId) => {
    if (locations) {
      const location = locations.find((loc) => loc.LocationID === locationId);
      if (location) {
        return {
          latitude: parseFloat(location.Latitude),
          longitude: parseFloat(location.Longitude),
        };
      }
    }
    return { latitude: 0, longitude: 0 };
  };

  const handleEditTeam = (team) => {
    const { latitude, longitude } = getCoordinatesByLocationId(team.LocationID);
    const fullTeamInfo = {
      ...team,
      LocationName: getLocationName(team.LocationID),
      SportName: getCategoryName(team.SportID),
      LeagueName: getSubcategoryName(team.LeagueID),
      Latitude: latitude,
      Longitude: longitude,
    };
    dispatch(setSelectedTeamForEdit(fullTeamInfo));
  };

  const handleDeleteTeam = (team) => {
    dispatch(setSelectedTeamForDelete(team));
  }
//пагінація
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(5);
  const totalResults = teams.length;
  const totalPages = Math.ceil(totalResults / resultsPerPage);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      const newPage = prev > 1 ? prev - 1 : prev;
      return newPage;
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => {
      const newPage = prev < totalPages ? prev + 1 : prev;
      return newPage;
    });
  };

  const getPaginationNumbers = () => {
    const windowSize = 5;
    let start = Math.max(currentPage - Math.floor(windowSize / 2), 1);
    let end = Math.min(start + windowSize - 1, totalPages);

    if (totalPages < windowSize) {
      start = 1;
      end = totalPages;
    }

    const paginationNumbers = Array.from(
      { length: end - start + 1 },
      (_, idx) => start + idx
    );
    return paginationNumbers;
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const renderTeams = () => {
    const teamsToDisplay = isFiltering ? filteredTeams : (isSorted ? sortedTeams : teams);
   
    const teamsOnCurrentPage = teamsToDisplay.slice(
      (currentPage - 1) * resultsPerPage,
      currentPage * resultsPerPage
    );

    return teamsOnCurrentPage.map((team) => (
      <Styled.TeamTableRow key={team.TeamID}>
        <Styled.TeamTableCell1>
          <Styled.TeamTableCellText>{team.TeamName}</Styled.TeamTableCellText>
        </Styled.TeamTableCell1>
        <Styled.TeamTableCell2>
          <Styled.TeamTableCellText>
            {getLocationName(team.LocationID)}
          </Styled.TeamTableCellText>
        </Styled.TeamTableCell2>
        <Styled.TeamTableCell3>
          <Styled.TeamTableCellText>{team.date}</Styled.TeamTableCellText>
        </Styled.TeamTableCell3>
        <Styled.TeamTableCell4>
          <Styled.TeamTableCellText>
            {getCategoryName(team.SportID)}
          </Styled.TeamTableCellText>
        </Styled.TeamTableCell4>
        <Styled.TeamTableCell5>
          <Styled.TeamTableCellText>
            {getSubcategoryName(team.LeagueID)}
          </Styled.TeamTableCellText>
        </Styled.TeamTableCell5>
        <Styled.TeamTableCell6>
          <SmallTextButton
            size="23px"
            buttonStyle={{textAlign: 'center'}}
            onClick={() => handleEditTeam(team)}
            onDoubleClick={() => handleEditTeam(team)}
          >
            Edit
          </SmallTextButton>
        </Styled.TeamTableCell6>
        <Styled.TeamTableCell7>
          <Styled.DeleteButton onClick={() => handleDeleteTeam(team)} >
            <TrashIcon />
          </Styled.DeleteButton>
        </Styled.TeamTableCell7>
      </Styled.TeamTableRow>
    ));
  };

  const renderPaginationNumbers = () => {
    const paginationNumbers = getPaginationNumbers();

    return paginationNumbers.map((pageNumber) => (
      <Styled.PageNumber
        key={pageNumber}
        $isActive={currentPage === pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
      >
        {pageNumber}
      </Styled.PageNumber>
    ));
  };

  const handleToggleDropdown = () => setShowDropdown(!showDropdown);

  const handleChangeResultsPerPage = (size) => {
    setResultsPerPage(size);
    setCurrentPage(1);
    setShowDropdown(false);
  };

  useEffect(() => {
    const newTotalPages = Math.max(Math.ceil(totalResults / resultsPerPage), 1);
    setCurrentPage((prevPage) =>
      Math.max(Math.min(prevPage, newTotalPages), 1)
    );
  }, [resultsPerPage, totalResults]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const renderPagination = () => {
    return (
      <Styled.PaginationContainer>
        <Styled.PaginationRow>
          <Styled.PaginationCell>
            <Styled.PaginationButton
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              <ArrowLeft />
            </Styled.PaginationButton>
            {renderPaginationNumbers()}
            <Styled.PaginationButton
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <ArrowRight />
            </Styled.PaginationButton>
          </Styled.PaginationCell>
          <Styled.PaginationCellText>
            {`${(currentPage - 1) * resultsPerPage + 1} - ${Math.min(
              (currentPage - 1) * resultsPerPage + resultsPerPage,
              totalResults
            )} of ${totalResults} results`}
          </Styled.PaginationCellText>
          <Styled.ResultCellText>Results per page</Styled.ResultCellText>
          <Styled.ResultCell>
            <Styled.ResultsPerPageDropdown ref={dropdownRef}>
              <Styled.ResultItemItem> {resultsPerPage}</Styled.ResultItemItem>
              <Styled.DropdownButton onClick={handleToggleDropdown}>
                <Styled.DropdownIcon>
                  <DropdownArrow />
                </Styled.DropdownIcon>
              </Styled.DropdownButton>
              {showDropdown && (
                <Styled.DropdownContent>
                  {[5, 10, 15].map((size) => (
                    <Styled.DropdownItem
                      key={size}
                      onClick={() => handleChangeResultsPerPage(size)}
                    >
                      {size}
                    </Styled.DropdownItem>
                  ))}
                </Styled.DropdownContent>
              )}
            </Styled.ResultsPerPageDropdown>
          </Styled.ResultCell>
        </Styled.PaginationRow>
      </Styled.PaginationContainer>
    );
  };
//фільтри
  const [sortedTeams, setSortedTeams] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isRotated, setIsRotated] = useState({
    name: false,
    location: false,
    date: false,
    category: false,
    subcategory: false,
  });

  useEffect(() => {
    setSortedTeams(teams);
    setIsSorted(false);
  }, [teams]);

  const sortTeams = (teams, sortBy) => {
    const sortingOptions = {
      name: (a, b) => {
        const teamA = a.TeamName.toLowerCase();
        const teamB = b.TeamName.toLowerCase();
        if (teamA < teamB) return -1;
        if (teamA > teamB) return 1;
        return 0;
      },
      location: (a, b) => {
        const locationA = getLocationName(a.LocationID).toLowerCase();
        const locationB = getLocationName(b.LocationID).toLowerCase();
        if (locationA < locationB) return -1;
        if (locationA > locationB) return 1;
        return 0;
      },
      date: (a, b) => {
        const dateA = new Date(
          parseInt(a.date.split('/')[2]), // Рік
          parseInt(a.date.split('/')[1]) - 1, // Місяць (відлік починається з 0)
          parseInt(a.date.split('/')[0]) // День
        );
        const dateB = new Date(
          parseInt(b.date.split('/')[2]), // Рік
          parseInt(b.date.split('/')[1]) - 1, // Місяць (відлік починається з 0)
          parseInt(b.date.split('/')[0]) // День
        );
        return dateA - dateB;
      },
      category: (a, b) => {
        const categoryA = getCategoryName(a.SportID).toLowerCase();
        const categoryB = getCategoryName(b.SportID).toLowerCase();
        if (categoryA < categoryB) return -1;
        if (categoryA > categoryB) return 1;
        return 0;
      },
      subcategory: (a, b) => {
        const subcategoryA = getSubcategoryName(a.LeagueID).toLowerCase();
        const subcategoryB = getSubcategoryName(b.LeagueID).toLowerCase();
        if (subcategoryA < subcategoryB) return -1;
        if (subcategoryA > subcategoryB) return 1;
        return 0;
      },
    };
  
    const sortingFunction = sortingOptions[sortBy];
    if (sortingFunction) {
      return [...teams].sort(sortingFunction);
    } else {
      return teams;
    }
  };

  const handleSortByName = () => {
    const sortedTeams = isSorted ? teams : sortTeams(teams, 'name');
    setSortedTeams(sortedTeams);
    setIsSorted(!isSorted);
  };
  
  const handleSortByLocation = () => {
    const sortedTeams = isSorted ? teams : sortTeams(teams, 'location');
    setSortedTeams(sortedTeams);
    setIsSorted(!isSorted);
  };
  
  const handleSortByDate = () => {
    const sortedTeams = isSorted ? teams : sortTeams(teams, 'date');
    setSortedTeams(sortedTeams);
    setIsSorted(!isSorted);
  };
  
  const handleSortByCategory = () => {
    const sortedTeams = isSorted ? teams : sortTeams(teams, 'category');
    setSortedTeams(sortedTeams);
    setIsSorted(!isSorted);
  };
  
  const handleSortBySubcategory = () => {
    const sortedTeams = isSorted ? teams : sortTeams(teams, 'subcategory');
    setSortedTeams(sortedTeams);
    setIsSorted(!isSorted);
  };

  return (
    <Styled.Table>
      <Styled.TeamTableHeader>
        <Styled.TeamTableHeaderRow>
          <Styled.TeamTableHeaderCell1 >
            <Styled.TeamTableHeaderCellText>
              Teams
              <Styled.HeaderSortButton  onClick={() => { handleSortByName(); setIsRotated({ ...isRotated, name: !isRotated.name }); }}>
              <Styled.HeaderSortIcon $isTransform={isRotated.name ? 1 : 0} />
            </Styled.HeaderSortButton>
            </Styled.TeamTableHeaderCellText> 
          </Styled.TeamTableHeaderCell1>
          <Styled.TeamTableHeaderCell2>
            <Styled.TeamTableHeaderCellText>
              Location
              <Styled.HeaderSortButton  onClick={() => { handleSortByLocation(); setIsRotated({ ...isRotated, location: !isRotated.location }); }}>
              <Styled.HeaderSortIcon $isTransform={isRotated.location ? 1 : 0} />
            </Styled.HeaderSortButton>
            </Styled.TeamTableHeaderCellText>  
          </Styled.TeamTableHeaderCell2>
          <Styled.TeamTableHeaderCell3 >
            <Styled.TeamTableHeaderCellText>
              Date added
              <Styled.HeaderSortButton onClick={() => { handleSortByDate(); setIsRotated({ ...isRotated, date: !isRotated.date }); }}>
              <Styled.HeaderSortIcon $isTransform={isRotated.date ? 1 : 0} />
            </Styled.HeaderSortButton>
            </Styled.TeamTableHeaderCellText> 
          </Styled.TeamTableHeaderCell3>
          <Styled.TeamTableHeaderCell4 >
            <Styled.TeamTableHeaderCellText>
              Category
              <Styled.HeaderSortButton onClick={() => { handleSortByCategory(); setIsRotated({ ...isRotated, category: !isRotated.category }); }}>
              <Styled.HeaderSortIcon $isTransform={isRotated.category ? 1 : 0} />
            </Styled.HeaderSortButton>
            </Styled.TeamTableHeaderCellText>  
          </Styled.TeamTableHeaderCell4>
          <Styled.TeamTableHeaderCell5 >
            <Styled.TeamTableHeaderCellText>
              Subcategory
              <Styled.HeaderSortButton onClick={() => { handleSortBySubcategory(); setIsRotated({ ...isRotated, subcategory: !isRotated.subcategory }); }}>
              <Styled.HeaderSortIcon $isTransform={isRotated.subcategory ? 1 : 0} /> 
            </Styled.HeaderSortButton>
            </Styled.TeamTableHeaderCellText> 
          </Styled.TeamTableHeaderCell5>
          <Styled.TeamTableHeaderCell6 />
          <Styled.TeamTableHeaderCell7 />
        </Styled.TeamTableHeaderRow>
      </Styled.TeamTableHeader>
      <Styled.TeamTable>{renderTeams()}</Styled.TeamTable>
      {renderPagination()}
    </Styled.Table>
  );
};
