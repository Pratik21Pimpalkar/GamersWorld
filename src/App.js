import React from "react";
import { Home } from "./Pages/Homepage";
import GlobalStyles from "./components/GlobalStyles";
import { Switch,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <GlobalStyles />
      <Routes>
        <Route path={`/game/:id` |"/" }  element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
