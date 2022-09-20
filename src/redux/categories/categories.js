const BOOKLIST = "catagories/catagories/BOOKLIST";

const categories = {
  message: "Under construction",
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
        state: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
