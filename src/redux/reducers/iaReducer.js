const initialState = {
  categories: [],
  subcategories: [],
  saveButtonClicked: false,
};

export const iaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "UPDATE_CATEGORIES":
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        categories: action.payload,
      };
    case "ADD_CATEGORY":
      return {
        ...state,
        categories: [action.payload, ...state.categories],
      };
    case "UPDATE_CATEGORY":
      return {
        ...state,
        categories: state.categories.map((category) =>
          category.SportID === action.payload.categoryId
            ? { ...category, ...action.payload.updatedInfo }
            : category
        ),
      };
    case "DELETE_CATEGORY":
      return {
        ...state,
        categories: state.categories.filter(
          (category) => category.SportID !== action.payload
        ),
      };
    case "LOAD_SUBCATEGORIES":
      return {
        ...state,
        subcategories: action.payload,
      };
    case "UPDATE_SUBCATEGORIES":
      if (!action.payload) {
        return state;
      }
      return {
        ...state,
        subcategories: action.payload,
      };
    case "ADD_SUBCATEGORY":
      return {
        ...state,
        subcategories: [action.payload, ...state.subcategories],
      };
    case "UPDATE_SUBCATEGORY":
      return {
        ...state,
        subcategories: state.subcategories.map((subcategory) =>
          subcategory.LeagueID === action.payload.subcategoryId
            ? { ...subcategory, ...action.payload.updatedInfo }
            : subcategory
        ),
      };
    case "DELETE_SUBCATEGORY":
      return {
        ...state,
        subcategories: state.subcategories.filter(
          (subcategory) => subcategory.LeagueID !== action.payload
        ),
      };
    case "SET_IA_SAVE_BUTTON_CLICKED":
      return {
        ...state,
        saveButtonClicked: action.payload,
      };
    default:
      return state;
  }
};
