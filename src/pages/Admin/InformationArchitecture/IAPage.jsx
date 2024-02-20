import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSaveButtonClicked } from "../../../redux/actions/iaActions";
import { IAMenu } from "./IAMenuNavigation/IAMenu";
import { CreateItem } from "./IACreateItem/CreateItem";
import { FlashMessage } from "../../../components/FlashMessage/FlashMessage";
import * as Styled from "./styled";
import * as CategoryService from "../../../services/CategoryService";
import * as SubcategoryService from "../../../services/SubcategoryService";
import * as TeamService from "../../../services/TeamService";
import { v4 as uuidv4 } from "uuid";

export const IAPage = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const saveButtonClicked = useSelector((state) => state.ia.saveButtonClicked);

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState({});
  const [teams, setTeams] = useState({});
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

  const loadSubcategories = useCallback(
    async (sport) => {
      const categoryId = sport.SportID;

      try {
        let subcategoriesData;

        if (!subcategories[categoryId]) {
          subcategoriesData = await SubcategoryService.getSubcategories(
            categoryId
          );

          setSubcategories((prevData) => ({
            ...prevData,
            [categoryId]: subcategoriesData,
          }));
        }

        setSelectedSubcategory(null);
      } catch (error) {
        console.error("Error loading subcategories:", error);
      }
    },
    [subcategories]
  );

  const loadTeams = async (league) => {
    const subcategoryId = league.LeagueID;

    try {
      if (!teams[subcategoryId]) {
        const teamsData = await TeamService.getTeams(subcategoryId);
        setTeams((prevData) => ({
          ...prevData,
          [subcategoryId]: teamsData,
        }));
      }

      setSelectedSubcategory(league);
    } catch (error) {
      console.error("Error loading teams:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await CategoryService.getCategories();
        setCategories(categoriesData.sports);

        await Promise.all(
          categoriesData.sports.map((category) => loadSubcategories(category))
        );
      } catch (error) {
        console.error("Error loading categories:", error.message);
      }
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const showSubcategories = async (sport) => {
    await loadSubcategories(sport);
    setSelectedCategory(sport);
    setSelectedSubcategory(null);
  };

  const createItem = (itemType, itemName) => {
    const changeType = "add";
    const newItem = {};

    switch (itemType) {
      case "category":
        newItem.SportID = uuidv4();
        newItem.SportName = itemName;

        setCategories((prevCategories) => {
          const newCategory = { ...newItem };
          return [newCategory, ...prevCategories];
        });
        break;

      case "subcategory":
        if (selectedCategory) {
          newItem.LeagueID = uuidv4();
          newItem.LeagueName = itemName;
          newItem.SportID = selectedCategory.SportID;

          setSubcategories((prevSubcategories) => ({
            ...prevSubcategories,
            [selectedCategory.SportID]: [
              newItem,
              ...(prevSubcategories[selectedCategory.SportID] || []),
            ],
          }));
        }
        break;

      case "team":
        if (selectedSubcategory) {
          newItem.TeamID = uuidv4();
          newItem.TeamName = itemName;
          newItem.LeagueID = selectedSubcategory.LeagueID;
          newItem.SportID = selectedSubcategory.SportID;

          setTeams((prevTeams) => ({
            ...prevTeams,
            [selectedSubcategory.LeagueID]: [
              newItem,
              ...(prevTeams[selectedSubcategory.LeagueID] || []),
            ],
          }));
        }
        break;

      default:
        break;
    }

    setChanges((prevChanges) => ({
      ...prevChanges,
      [changeType]: {
        ...prevChanges[changeType],
        [itemType]: Array.isArray(prevChanges[changeType][itemType])
          ? [...prevChanges[changeType][itemType], newItem]
          : [newItem],
      },
    }));

    setFlashMessage({
      title: "Saved!",
      description: "Information architecture is successfully saved!",
    });
  };

  const editItem = (itemType, itemId, newName) => {
    const changeType = "edit";
    let updateKey, nameKey;

    switch (itemType) {
      case "category":
        updateKey = "SportID";
        nameKey = "SportName";
        setCategories((prevCategories) =>
          prevCategories.map((category) =>
            category[updateKey] === itemId
              ? { ...category, [nameKey]: newName }
              : category
          )
        );
        break;

      case "subcategory":
        updateKey = "LeagueID";
        nameKey = "LeagueName";
        setSubcategories((prevSubcategories) => ({
          ...prevSubcategories,
          [selectedCategory.SportID]: (
            prevSubcategories[selectedCategory.SportID] || []
          ).map((subcategory) =>
            subcategory[updateKey] === itemId
              ? { ...subcategory, [nameKey]: newName }
              : subcategory
          ),
        }));
        break;

      case "team":
        updateKey = "TeamID";
        nameKey = "TeamName";
        setTeams((prevTeams) => ({
          ...prevTeams,
          [selectedSubcategory.LeagueID]: (
            prevTeams[selectedSubcategory.LeagueID] || []
          ).map((team) =>
            team[updateKey] === itemId ? { ...team, [nameKey]: newName } : team
          ),
        }));
        break;

      default:
        break;
    }

    setChanges((prevChanges) => ({
      ...prevChanges,
      [changeType]: {
        ...prevChanges[changeType],
        [itemType]: Array.isArray(prevChanges[changeType][itemType])
          ? [
              ...prevChanges[changeType][itemType].map((item) =>
                item[updateKey] === itemId
                  ? { ...item, [nameKey]: newName }
                  : item
              ),
              ...(prevChanges[changeType][itemType].some(
                (item) => item[updateKey] === itemId
              )
                ? []
                : [{ [updateKey]: itemId, [nameKey]: newName }]),
            ]
          : [{ [updateKey]: itemId, [nameKey]: newName }],
      },
    }));
  };

  const deleteItem = (itemType, itemId) => {
    const changeType = "delete";

    switch (itemType) {
      case "category":
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.SportID !== itemId)
        );
        break;
      case "subcategory":
        setSubcategories((prevSubcategories) => {
          const sportId = selectedCategory.SportID;
          const updatedSubcategories = {
            ...prevSubcategories,
            [sportId]: (prevSubcategories[sportId] || []).filter(
              (subcategory) => subcategory.LeagueID !== itemId
            ),
          };
          return updatedSubcategories;
        });
        break;
      case "team":
        setTeams((prevTeams) => {
          const leagueId = selectedSubcategory.LeagueID;
          const updatedTeams = {
            ...prevTeams,
            [leagueId]: (prevTeams[leagueId] || []).filter(
              (team) => team.TeamID !== itemId
            ),
          };
          return updatedTeams;
        });
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
  };

  const changeItemVisibility = (itemType, item) => {
    const changeType = "edit";
    let idKey;

    switch (itemType) {
      case "category":
        idKey = "SportID";
        setCategories((prevCategories) =>
          prevCategories.map((category) => {
            const updatedCategory =
              category[idKey] === item[idKey]
                ? { ...category, isHidden: !item.isHidden }
                : category;
            return updatedCategory;
          })
        );
        break;

      case "subcategory":
        idKey = "LeagueID";
        setSubcategories((prevSubcategories) => ({
          ...prevSubcategories,
          [selectedCategory?.SportID]: (
            prevSubcategories[selectedCategory?.SportID] || []
          ).map((sub) => {
            const updatedSubcategory =
              sub[idKey] === item[idKey]
                ? { ...sub, isHidden: !item.isHidden }
                : sub;
            return updatedSubcategory;
          }),
        }));
        break;

      case "team":
        idKey = "TeamID";
        setTeams((prevTeams) => ({
          ...prevTeams,
          [selectedSubcategory?.LeagueID]: (
            prevTeams[selectedSubcategory?.LeagueID] || []
          ).map((team) => {
            const updatedTeam =
              team[idKey] === item[idKey]
                ? { ...team, isHidden: !item.isHidden }
                : team;
            return updatedTeam;
          }),
        }));
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

  const moveItem = async (itemType, item, newId) => {
    const changeType = "edit";

    try {
      if (itemType === "subcategory") {
        const newCategoryId = newId;

        if (!subcategories[newCategoryId]) {
          const subcategoriesData = await SubcategoryService.getSubcategories(
            newCategoryId
          );
          setSubcategories((prevSubcategories) => ({
            ...prevSubcategories,
            [newCategoryId]: subcategoriesData,
          }));
        }

        setSubcategories((prevSubcategories) => {
          const {
            [selectedCategory?.SportID]: selectedSubcategories,
            ...restSubcategories
          } = prevSubcategories;
          const updatedSelectedSubcategories = (
            selectedSubcategories || []
          ).filter((sub) => sub.LeagueID !== item.LeagueID);
          const movedSubcategory = { ...item, LeagueID: newCategoryId };
          const updatedNewSubcategories = [
            movedSubcategory,
            ...(prevSubcategories[newCategoryId] || []),
          ];
          const teamsToMove = teams[item.LeagueID] || [];
          setTeams((prevTeams) => ({
            ...prevTeams,
            [newCategoryId]: [
              ...(prevTeams[newCategoryId] || []),
              ...teamsToMove,
            ],
            [item.LeagueID]: [],
          }));

          return {
            ...restSubcategories,
            [selectedCategory?.SportID]: updatedSelectedSubcategories,
            [newCategoryId]: updatedNewSubcategories,
          };
        });

        setChanges((prevChanges) => ({
          ...prevChanges,
          [changeType]: {
            category: [],
            subcategory:
              itemType === "subcategory"
                ? [{ ...item, newId: newCategoryId }]
                : [],
            team: itemType === "subcategory" ? [] : [],
          },
        }));
      } else if (itemType === "team") {
        const newSubcategoryId = newId;

        if (!teams[newSubcategoryId]) {
          const teamsData = await TeamService.getTeams(newSubcategoryId);
          setTeams((prevTeams) => ({
            ...prevTeams,
            [newSubcategoryId]: teamsData,
          }));
        }

        setTeams((prevTeams) => {
          const updatedTeams = { ...prevTeams };

          updatedTeams[selectedSubcategory?.LeagueID] = updatedTeams[
            selectedSubcategory?.LeagueID
          ].filter((t) => t.TeamID !== item.TeamID);

          updatedTeams[newSubcategoryId] = [
            { ...item, LeagueID: newSubcategoryId },
            ...(updatedTeams[newSubcategoryId] || []),
          ];

          return updatedTeams;
        });

        setChanges((prevChanges) => ({
          ...prevChanges,
          [changeType]: {
            category: [],
            subcategory: [],
            team:
              itemType === "team" ? [{ ...item, newId: newSubcategoryId }] : [],
          },
        }));
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
        await Promise.all(
          changes.add.category.map(CategoryService.createCategory)
        );
      }

      if (changes.edit.category.length > 0) {
        await Promise.all(
          changes.edit.category.map((item) =>
            CategoryService.updateCategory(item.SportID, item)
          )
        );
      }

      if (changes.delete.category.length > 0) {
        await Promise.all(
          changes.delete.category.map((item) =>
            CategoryService.deleteCategory(item.id)
          )
        );
      }
      if (changes.add.subcategory.length > 0) {
        await Promise.all(
          changes.add.subcategory.map(SubcategoryService.createSubcategory)
        );
      }

      if (changes.edit.subcategory.length > 0) {
        await Promise.all(
          changes.edit.subcategory.map((item) =>
            SubcategoryService.updateSubcategory(item.LeagueID, item)
          )
        );
      }

      if (changes.delete.subcategory.length > 0) {
        await Promise.all(
          changes.delete.subcategory.map((item) =>
            SubcategoryService.deleteSubcategory(item.id)
          )
        );
      }

      if (changes.add.team.length > 0) {
        await Promise.all(changes.add.team.map(TeamService.createTeam));
      }

      if (changes.edit.team.length > 0) {
        await Promise.all(
          changes.edit.team.map((item) =>
            TeamService.updateTeam(item.TeamID, item)
          )
        );
      }

      if (changes.delete.team.length > 0) {
        await Promise.all(
          changes.delete.team.map((item) => TeamService.deleteTeam(item.id))
        );
      }

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

      console.log("Changes successfully applied on the server");
    } catch (error) {
      console.error("Error applying changes on the server:", error);
    }
  };

  useEffect(() => {
    if (saveButtonClicked) {
      applyChangesOnServer();
      dispatch(setSaveButtonClicked(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [saveButtonClicked, dispatch]);

  return (
    <Styled.IABox>
      {flashMessage && (
        <FlashMessage
          title={flashMessage.title}
          description={flashMessage.description}
          onClose={() => setFlashMessage(null)}
        />
      )}
      <Styled.AddSection>
        <CreateItem
          itemType="category"
          onPress={(itemType, ItemName) => createItem(itemType, ItemName)}
        />
        <CreateItem
          itemType="subcategory"
          onPress={(itemType, ItemName) => createItem(itemType, ItemName)}
        />
        <CreateItem
          itemType="team"
          onPress={(itemType, ItemName) => createItem(itemType, ItemName)}
        />
      </Styled.AddSection>
      <Styled.ItemsSection>
        <Styled.ItemsGroup>
          {categories.map((x, index) => (
            <IAMenu
              key={index}
              name={x.SportName}
              itemType="category"
              isActive={
                selectedCategory && selectedCategory.SportID === x.SportID
              }
              categories={categories}
              item={x}
              selectedCategory={selectedCategory}
              onPress={() => showSubcategories(x)}
              onDelete={() => deleteItem("category", x.SportID)}
              onEdit={(newName) => editItem("category", x.SportID, newName)}
              onPressChangeVisibility={() =>
                changeItemVisibility("category", x)
              }
            />
          ))}
        </Styled.ItemsGroup>
        {subcategories[selectedCategory?.SportID] && (
          <Styled.ItemsGroup>
            {subcategories[selectedCategory?.SportID].map((x, index) => (
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
                onPress={() => loadTeams(x)}
                onDelete={() => deleteItem("subcategory", x.LeagueID)}
                onEdit={(newName) =>
                  editItem("subcategory", x.LeagueID, newName)
                }
                onPressChangeVisibility={() =>
                  changeItemVisibility("subcategory", x)
                }
                onPressToMove={(newCategoryId) =>
                  moveItem("subcategory", x, newCategoryId)
                }
              />
            ))}
          </Styled.ItemsGroup>
        )}

        {teams[selectedSubcategory?.LeagueID] && (
          <Styled.ItemsGroup>
            {teams[selectedSubcategory?.LeagueID].map((x, index) => (
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
                onDelete={() => deleteItem("team", x.TeamID)}
                onEdit={(newName) => editItem("team", x.TeamID, newName)}
                onPressChangeVisibility={() => changeItemVisibility("team", x)}
                onPressToMove={(newSubcategoryId) =>
                  moveItem("team", x, newSubcategoryId)
                }
              />
            ))}
          </Styled.ItemsGroup>
        )}
      </Styled.ItemsSection>
    </Styled.IABox>
  );
};
