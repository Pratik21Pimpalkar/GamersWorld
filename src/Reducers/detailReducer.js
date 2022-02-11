const initState = {
  game: {platforms:[]},
  snap: {results:[]},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        snap: action.payload.snap,
      };
    default:
      return { ...state };
  }
};
export default detailReducer;
