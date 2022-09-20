const BOOKLIST = "catagories/catagories/BOOKLIST";

const categories = {
  message: "",
};

export const checkBook = () => (dispatch) => {
  dispatch({
    type: BOOKLIST,
    payload: "Under construction",
  });
};

const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case BOOKLIST:
      return {
        ...state,
        message: [...state.message, action.payload],
      };

    default:
      return state;
  }
};

export default categoryReducer;
