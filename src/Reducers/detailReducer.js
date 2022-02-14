const initState = {
  game: {platforms:[]},
  snap: {results:[]},
  loading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        snap: action.payload.snap,
        loading:false
      };
      case "LOADING_DETAIL":
        return{ loading:true}
    default:
      return { ...state };
  }
};
export default detailReducer;
