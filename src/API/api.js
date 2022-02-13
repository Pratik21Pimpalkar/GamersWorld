
const baseURL=`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}`




const getCurrentMonth=()=>{
    const month = new Date().getMonth()+1;
    if(month<10){
        return `0${month}`
    }else{
        return month;
    }
}
const getCurrentDay=()=>{
    const day = new Date().getDate();
    if(day<10){
        return `0${day}`
    }else{
        return day;
    }
}
const getCurrentYear=()=>{
    const year = new Date().getFullYear();
   return year;
}
const currentYear= getCurrentYear();
const currentMonth= getCurrentMonth();
const currentDay= getCurrentDay();
const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`
// console.log(currentDate,lastYear,nextYear)
// console.log(currentDate);

// const popular_games
const popular_games= `&date=${currentDate},${lastYear}&ordering=-added&page_size=12`
const upcoming_games= `&date=${currentDate},${nextYear}&ordering=created&page_size=12`
// const upcoming_games= `&date=${currentDate},${nextYear}&ordering=-released&page_size=12`

const new_games=`&date=${lastYear},${currentDate}&ordering=added&page_size=12`

export const popular_gamesURL=()=>`${baseURL}${popular_games}`
export const upcoming_gamesURL=()=>`${baseURL}${upcoming_games}`
export const new_gamesURL=()=>`${baseURL}${new_games}`

// Game Details

export const gameDetailsURL=(gameID)=>  `https://api.rawg.io/api/games/${gameID}?key=${process.env.REACT_APP_KEY}`
export const gameSnapURL=(gameID)=>  `https://api.rawg.io/api/games/${gameID}/screenshots?key=${process.env.REACT_APP_KEY}`
// Search Games

export const searchGamesURL=(gameName)=>`https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${gameName}&page_size=12`

