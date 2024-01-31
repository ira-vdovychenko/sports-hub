const initialState = {
    saveButtonClicked: false,
  };
  
   const iaReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_IA_SAVE_BUTTON_CLICKED':
        return {
          ...state,
          saveButtonClicked: action.payload,
        };
      default:
        return state;
    }
  };

  export default iaReducer;
  