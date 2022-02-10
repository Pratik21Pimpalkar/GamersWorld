import React, {useEffect} from "react";
import LoadGames from "./actions/GamesAction";
import {useDispatch} from 'react-redux';



function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(LoadGames());
  })
  return (
    <div className="App">
    hello
    </div>
  );
}

export default App;
