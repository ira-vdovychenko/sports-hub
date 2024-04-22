export const loadCategories = (categories) => ({
  type: 'LOAD_CATEGORIES',
  payload: categories,
});

export const updateCategories = (categories) => ({
  type: 'UPDATE_CATEGORIES',
  payload: categories,
});

export const addCategory = (categoryData) => {
  return {
    type: "ADD_CATEGORY",
    payload: categoryData,
  };
};

export const updateCategory = (categoryId, updatedInfo) => {
  return {
    type: "UPDATE_CATEGORY",
    payload: { categoryId, updatedInfo },
  };
};

export const deleteCategory = (categoryId) => {
  return {
    type: "DELETE_CATEGORY",
    payload: categoryId,
  };
};

export const loadSubcategories = (subcategories) => ({
  type: 'LOAD_SUBCATEGORIES',
  payload: subcategories,
});

export const updateSubcategories = (subcategories) => ({
  type: 'UPDATE_SUBCATEGORIES',
  payload: subcategories,
});

export const addSubcategory = (subcategoriesData) => {
  return {
    type: "ADD_SUBCATEGORY",
    payload: subcategoriesData,
  };
};

export const updateSubcategory = (subcategoryId, updatedInfo) => {
  return {
    type: "UPDATE_SUBCATEGORY",
    payload: { subcategoryId, updatedInfo },
  };
};


export const deleteSubcategory = (subcategoryId) => {
  return {
    type: "DELETE_SUBCATEGORY",
    payload: subcategoryId,
  };
};
export const setSaveButtonClicked = (isClicked) => ({
  type: "SET_IA_SAVE_BUTTON_CLICKED",
  payload: isClicked,
});
