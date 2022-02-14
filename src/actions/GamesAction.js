import axios from "axios";
import { popular_gamesURL,searchGamesURL ,new_gamesURL, upcoming_gamesURL } from "../API/api";

const LoadGames = () => async (dispatch) => {
  const PopularData = await axios.get(popular_gamesURL());
  const NewData = await axios.get(new_gamesURL());
  const UpcomingData = await axios.get(upcoming_gamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: PopularData.data.results,
      newGames:NewData.data.results,
      upcoming:UpcomingData.data.results,
    },
  });
};

export const fetchsearch=(gameName)=>async(dispatch)=>{
  const searchGames=await axios.get(searchGamesURL(gameName));

  dispatch({
    type:"FETCH_SEARCHGAMES",
    payload:{
      search: searchGames.data.results,
    }
  })
}
export default LoadGames;
