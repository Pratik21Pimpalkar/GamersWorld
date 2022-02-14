const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  search:[],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state ,
         popular:action.payload.popular,
         newGames:action.payload.newGames,
         upcoming:action.payload.upcoming
        };
    case "FETCH_SEARCHGAMES":
      return {
        ...state,
        search:action.payload.search,
      }
      case "CLEAR_SEARCHGAMES":
        return{
          ...state,
          search:[],
        }
    default:
      return { ...state };
  }
};

export default gameReducer;
