import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSaveButtonClicked, loadCategories, loadSubcategories, addCategory, addSubcategory, updateCategory, updateSubcategory, deleteCategory, deleteSubcategory } from "../../../redux/actions/iaActions";
import { loadTeams, addTeam, updateTeam, deleteTeam } from "../../../redux/actions/teamActions.js";
import { IACreateItem, IAMenu } from "./index.js";
import { FlashMessage } from "../../../components/FlashMessage/FlashMessage";
import * as Styled from "./styled";
import * as CategoryService from "../../../services/CategoryService";
import * as SubcategoryService from "../../../services/SubcategoryService";
import * as TeamService from "../../../services/TeamService";
import { v4 as uuidv4 } from "uuid";

export const IAPage = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.ia.categories);
  const subcategories = useSelector((state) => state.ia.subcategories);
  const teams = useSelector((state) => state.team.teams);
  const saveButtonClicked = useSelector((state) => state.ia.saveButtonClicked);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [flashMessage, setFlashMessage] = useState(null);
  const [changes, setChanges] = useState({
    add: {
      category: [],
      subcategory: [],
      team: [],
    },
    delete: {
      category: [],
      subcategory: [],
      team: [],
    },
    edit: {
      category: [],
      subcategory: [],
      team: [],
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await CategoryService.getCategories();
        const categoriesArray = Object.values(categoriesData.sports);
        dispatch(loadCategories(categoriesArray));

        const subcategoriesData = await SubcategoryService.getSubcategories();
        dispatch(loadSubcategories(subcategoriesData));

        const teamsData = await TeamService.getTeams();
        dispatch(loadTeams(teamsData));
      } catch (error) {
        console.error("Error loading categories:", error.message);
      }
    };
    fetchData();
  }, [dispatch]);

  const getSubcategories = (category) => {
    setSelectedCategory(category);
    const filteredSubcategories = subcategories.filter((subcategory) => subcategory.SportID === category.SportID);
    setSelectedSubcategory(null);
    return filteredSubcategories;
  };

  const getTeams = (subcategory) => {
    setSelectedSubcategory(subcategory);
    const filteredTeams = teams.filter((team) => team.LeagueID === subcategory.LeagueID);
    return filteredTeams;
  };

  const createItem = (itemType, itemName, selectedCategory) => {
    const newItem = {};
    switch (itemType) {

      case "category":
        newItem.SportID = uuidv4();
        newItem.SportName = itemName;
        dispatch(addCategory(newItem));
        setChanges((prevChanges) => ({
          ...prevChanges,
          add: {
            ...prevChanges.add,
            [itemType]: [...prevChanges.add[itemType], newItem],
          },
        }));
        break;

      case "subcategory":
        if (selectedCategory) {
          newItem.LeagueID = uuidv4();
          newItem.LeagueName = itemName;
          newItem.SportID = selectedCategory.SportID;
          dispatch(addSubcategory(newItem));
          setChanges((prevChanges) => ({
            ...prevChanges,
            add: {
              ...prevChanges.add,
              [itemType]: [...prevChanges.add[itemType], newItem],
            },
          }));
        }
        break;

      case "team":
        if (selectedSubcategory) {
          newItem.TeamID = uuidv4();
          newItem.TeamName = itemName;
          newItem.LeagueID = selectedSubcategory.LeagueID;
          newItem.SportID = selectedSubcategory.SportID;
          dispatch(addTeam(newItem));
          setChanges((prevChanges) => ({
            ...prevChanges,
            add: {
              ...prevChanges.add,
              [itemType]: [...prevChanges.add[itemType], newItem],
            },
          }));
        }
        break;

      default:
        break;
    }
  };

  const editItem = (itemType, itemId, newName) => {
    let updateKey, nameKey, changeType;
    switch (itemType) {

      case "category":
        updateKey = "SportID";
        nameKey = "SportName";
        changeType = "edit";
        dispatch(updateCategory(itemId, { [nameKey]: newName }));
        break;

      case "subcategory":
        updateKey = "LeagueID";
        nameKey = "LeagueName";
        changeType = "edit";
        dispatch(updateSubcategory(itemId, { [nameKey]: newName }));
        break;

      case "team":
        updateKey = "TeamID";
        nameKey = "TeamName";
        changeType = "edit";
        dispatch(updateTeam(itemId, { [nameKey]: newName }));
        break;

      default:
        break;
    }
    setChanges((prevChanges) => ({
      ...prevChanges,
      [changeType]: {
        ...prevChanges[changeType],
        [itemType]: [
          ...(prevChanges[changeType][itemType] || []),
          { [updateKey]: itemId, [nameKey]: newName },
        ],
      },
    }));
  };

  const deleteItem = async (itemType, itemId) => {
    const changeType = "delete";
    try {
      switch (itemType) {

        case "category":
          const subcategoriesToDelete = subcategories.filter((subcategory) => subcategory.SportID === itemId);
          subcategoriesToDelete.forEach((subcategory) => {
            const teamsToDelete = teams.filter((team) => team.LeagueID === subcategory.LeagueID);
            teamsToDelete.forEach((team) => deleteItem("team", team.TeamID));
            deleteItem("subcategory", subcategory.LeagueID);});
          dispatch(deleteCategory(itemId));
          break;

        case "subcategory":
          const teamsToDelete = teams.filter((team) => team.LeagueID === itemId);
          teamsToDelete.forEach((team) => deleteItem("team", team.TeamID));
          dispatch(deleteSubcategory(itemId));
          break;

        case "team":
          dispatch(deleteTeam(itemId));
          break;

        default:
          break;
      }

      setChanges((prevChanges) => ({
        ...prevChanges,
        [changeType]: {
          ...prevChanges[changeType],
          [itemType]: [...prevChanges[changeType][itemType], { id: itemId }],
        },
      }));
    } catch (error) {
      console.error(`Error deleting ${itemType}:`, error);
    }
  };

  const changeItemVisibility = (itemType, item) => {
    const changeType = "edit";
    let idKey;

    switch (itemType) {

      case "category":
        idKey = "SportID";
        dispatch(updateCategory(item[idKey], { isHidden: !item.isHidden }));
        break;

      case "subcategory":
        idKey = "LeagueID";
        dispatch(updateSubcategory(item[idKey], { isHidden: !item.isHidden }));
        break;

      case "team":
        idKey = "TeamID";
        dispatch(updateTeam(item[idKey], { isHidden: !item.isHidden }));
        break;

      default:
        break;
    }

    setChanges((prevChanges) => ({
      ...prevChanges,
      [changeType]: {
        ...prevChanges[changeType],
        [itemType]: [
          ...prevChanges[changeType][itemType],
          {
            [idKey]: item[idKey],
            isHidden: item.isHidden === undefined ? true : !item.isHidden,
          },
        ],
      },
    }));
  };

  const moveSubcategory = (itemType, item, newCategoryId) => {
    try {
      if (itemType === "subcategory") {
        const updatedSubcategory = {
          ...item,
          LeagueID: item.LeagueID,
          SportID: newCategoryId,
        };
        dispatch(updateSubcategory(item.LeagueID, updatedSubcategory));

        const teamsToUpdate = teams.filter((team) => team.LeagueID === item.LeagueID);

        const teamIDsToDelete = teamsToUpdate.map((team) => team.TeamID);
        teamIDsToDelete.forEach((TeamID) => {
          dispatch(deleteTeam(TeamID));
        });

        const updatedTeams = teamsToUpdate.map((team) => ({
          ...team,
          SportID: newCategoryId,
        }));
        updatedTeams.forEach((updatedTeam) => {
          dispatch(addTeam(updatedTeam));
        });

        setChanges((prevChanges) => ({
          ...prevChanges,
          edit: {
            ...prevChanges.edit,
            subcategory: [
              ...(prevChanges.edit.subcategory || []),
              (item.LeagueID, updatedSubcategory),
            ],
          },
          delete: {
            ...prevChanges.delete,
          
            team: [
              ...(prevChanges.delete.team || []),
              ...teamIDsToDelete.map((id) => ({ id })),
            ],
          },
          add: {
            ...prevChanges.add,
            team: [...(prevChanges.add.team || []), ...updatedTeams],
          },
        }));

      } else {
        console.error("Invalid item type");
        return;
      }
    } catch (error) {
      console.error(`Error moving ${itemType}:`, error);
    }
  };

  const moveTeam = (itemType, item, newSubcategoryId, newCategoryId) => {
    try {
      if (itemType === "team") {
        dispatch({ type: "DELETE_TEAM", payload: item.TeamID });
        const updatedTeam = {
          ...item,
          LeagueID: newSubcategoryId,
          SportID: newCategoryId,
        };
        dispatch({ type: "ADD_TEAM", payload: updatedTeam });

        setChanges((prevChanges) => ({
          ...prevChanges,
          add: {
            ...prevChanges.add,
            team: [...(prevChanges.add.team || []), updatedTeam],
          },
          delete: {
            ...prevChanges.delete,
            team: [...(prevChanges.delete.team || []), { id: item.TeamID }],
          },
        }));
      } else {
        console.error("Invalid item type");
        return;
      }
    } catch (error) {
      console.error(`Error moving ${itemType}:`, error);
    }
  };

  const applyChangesOnServer = async () => {
    try {
      if (!token) {
        return;
      }

      if (changes.add.category.length > 0) { 
        await Promise.all(changes.add.category.map(CategoryService.createCategory));
      }

      if (changes.edit.category.length > 0) {
        await Promise.all(changes.edit.category.map((item) => CategoryService.updateCategory(item.SportID, item)));
      }

      if (changes.delete.category.length > 0) {
        await Promise.all(changes.delete.category.map((item) => CategoryService.deleteCategory(item.id)));
      }

      if (changes.add.subcategory.length > 0) {
        await Promise.all(changes.add.subcategory.map(SubcategoryService.createSubcategory));
      }

      if (changes.edit.subcategory.length > 0) {
        await Promise.all(changes.edit.subcategory.map((item) => SubcategoryService.updateSubcategory(item.LeagueID, item)));
      }

      if (changes.delete.subcategory.length > 0) {
        await Promise.all(changes.delete.subcategory.map((item) => SubcategoryService.deleteSubcategory(item.id)));
      }

      if (changes.add.team.length > 0) {
        await Promise.all(changes.add.team.map(TeamService.createTeam));
      }

      if (changes.edit.team.length > 0) {
        await Promise.all(changes.edit.team.map((item) => TeamService.updateTeam(item.TeamID, item)));
      }

      if (changes.delete.team.length > 0) {
        await Promise.all(changes.delete.team.map((item) => TeamService.deleteTeam(item.id)));
      }

      setFlashMessage({
        title: "Saved!",
        description: "Information architecture is successfully saved!",
      });

      setChanges({
        add: {
          category: [],
          subcategory: [],
          team: [],
        },
        delete: {
          category: [],
          subcategory: [],
          team: [],
        },
        edit: {
          category: [],
          subcategory: [],
          team: [],
        },
      });
  
    } catch (error) {
      console.error("Error applying changes on the server:", error);
    }
  };

  useEffect(() => {
    if (saveButtonClicked) {
      applyChangesOnServer();
      dispatch(setSaveButtonClicked(false));
    }
  }, [saveButtonClicked, dispatch]);

  return (
    <Styled.IABox>
      {flashMessage && (
        <FlashMessage
          type={"success"}
          title={flashMessage.title}
          description={flashMessage.description}
          onClose={() => setFlashMessage(null)}
        />
      )}
      <Styled.AddSection>
        <IACreateItem
          itemType="category"
          onPress={(itemType, ItemName) => createItem(itemType, ItemName)}
        />
        {selectedCategory && (
          <IACreateItem
            itemType="subcategory"
            onPress={(itemType, ItemName) =>createItem(itemType, ItemName, selectedCategory)}
          />
        )}
        {selectedCategory && selectedSubcategory && (
          <IACreateItem
            itemType="team"
            onPress={(itemType, ItemName) => createItem(itemType, ItemName, selectedCategory, selectedSubcategory)}
          />
        )}
      </Styled.AddSection>

      <Styled.ItemsSection>
        <Styled.ItemsGroup>
          {categories.map((x, index) => (
            <IAMenu
              key={index}
              item={x}
              name={x.SportName}
              itemType="category"
              isActive={selectedCategory && selectedCategory.SportID === x.SportID}
              isHidden={x.isHidden}
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onPress={() => getSubcategories(x)}
              onEdit={(newName) => editItem("category", x.SportID, newName)}
              onDelete={() => deleteItem("category", x.SportID)}
              onPressChangeVisibility={() =>changeItemVisibility("category", x)}
            />
          ))}
        </Styled.ItemsGroup>

        {subcategories.find((subcategory) => subcategory.SportID === selectedCategory?.SportID) && (
          <Styled.ItemsGroup>
            {subcategories
              .filter((subcategory) =>subcategory.SportID === selectedCategory?.SportID)
              .map((x, index) => (
                <IAMenu
                  key={index}
                  name={x.LeagueName}
                  item={x}
                  categories={categories}
                  subcategories={subcategories}
                  itemType="subcategory"
                  selectedCategory={selectedCategory}
                  setSelectedSubcategory={setSelectedSubcategory}
                  isActive={selectedSubcategory?.LeagueID === x.LeagueID}
                  isHidden={x.isHidden}
                  onPress={() => getTeams(x)}
                  onEdit={(newName) => editItem("subcategory", x.LeagueID, newName)}
                  onDelete={() => deleteItem("subcategory", x.LeagueID)}
                  onPressChangeVisibility={() => changeItemVisibility("subcategory", x)}
                  onPressToMove={(newCategoryId) => moveSubcategory("subcategory", x, newCategoryId)}
                />
              ))}
          </Styled.ItemsGroup>
        )}

        {teams.find(
          (team) => team.LeagueID === selectedSubcategory?.LeagueID) && (
          <Styled.ItemsGroup>
            {teams
              .filter((team) => team.LeagueID === selectedSubcategory?.LeagueID)
              .map((x, index) => (
                <IAMenu
                  key={index}
                  name={x.TeamName}
                  item={x}
                  itemType="team"
                  categories={categories}
                  subcategories={subcategories}
                  selectedCategory={selectedCategory}
                  selectedSubcategory={selectedSubcategory}
                  isActive={false}
                  isHidden={x.isHidden}
                  onEdit={(newName) => editItem("team", x.TeamID, newName)}
                  onDelete={() => deleteItem("team", x.TeamID)}
                  onPressChangeVisibility={() => changeItemVisibility("team", x)}
                  onPressToMove={(newSubcategoryId, newCategoryId) => moveTeam("team", x, newSubcategoryId, newCategoryId)}
                />
              ))}
          </Styled.ItemsGroup>
        )}
      </Styled.ItemsSection>
    </Styled.IABox>
  );
};
