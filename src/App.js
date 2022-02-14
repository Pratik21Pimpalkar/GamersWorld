import React from "react";
import { Home } from "./Pages/Homepage";
import GlobalStyles from "./components/GlobalStyles";
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <GlobalStyles />
      <Routes>
        <Route  path="/"  element={<Home />} />
        <Route  path="/game/:id"  element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
