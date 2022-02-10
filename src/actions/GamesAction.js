import axios from 'axios'
import { popular_gamesURL } from '../API/api'

const LoadGames=()=>async(dispatch)=>{
    
 const PopularData=await axios.get(popular_gamesURL());
 dispatch({
     type: 'FETCH_GAMES',
     payload:{
         popular: PopularData.popular.data,
     }
 })
}
export default LoadGames