export const initialState = {
  users: null,
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        users: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
