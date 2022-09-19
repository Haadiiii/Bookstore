import Booklist from "../../Components/booklist";

const BOOKLIST = "catagories/catagories/BOOKLIST";

const categories = [];

export const checkBook = () => (dispatch) => {
  dispatch({
    type: BOOKLIST,
    payload: ["Under construction"],
  });
};

const categoryReducer = (state = categories, action) => {
  switch (action.type) {
    case Booklist:
      return {
        ...state,
        state: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
