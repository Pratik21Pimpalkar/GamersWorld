
const dotenv=require("dotenv")
dotenv.config({path:"./.env"})

const baseURL=`https://api.rawg.io/api/games?key=${process.env.REACT_API_KEY}`



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
    const year = new Date().getFullYear()+1;
   return year;
}
const currentYear= getCurrentYear();
const currentMonth= getCurrentMonth();
const currentDay= getCurrentDay();
const currentDate=`${currentYear}-${currentMonth}-${currentDay}`
const lastYear=`${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear=`${currentYear+1}-${currentMonth}-${currentDay}`
// console.log(currentDate);

// const popular_games
const popular_games= `&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const new_games=`&date=${lastYear},${currentDate}&ordering=-rating&page_size=10`

const popular_gamesURL=()=>`${baseURL}${popular_games}`
console.log(popular_gamesURL());

