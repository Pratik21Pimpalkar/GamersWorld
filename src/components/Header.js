import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { fetchsearch } from "../actions/GamesAction";
import { useDispatch } from "react-redux";
import { fadeIn } from "../Animation/animation";
import logo from "../Assets/Brand-Logo/psyduck.png"
const Header = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState("");

  const inputHandler = (e) => {
    setinput(e.target.value);
  };
  const submitSearch = (e) => {
    dispatch(fetchsearch(input));
    e.preventDefault();
    setinput("")
  };
  const clearSearch=()=>{
      dispatch({type:"CLEAR_SEARCHGAMES"})
  }
  return (
    <Styleheader  variants={fadeIn} transition="transistion" initial="hidden" animate="show">
      <Logo onClick={clearSearch}>
        <img src={logo} alt="PSYDUCK"/>
        <h3>Gamers World</h3>
      </Logo>
      <SearchBar>
        <form>
          <input onChange={inputHandler} value={input} type="text" />
          <button type="submit" onClick={submitSearch}>Search</button>
        </form>
      </SearchBar>
    </Styleheader>
  );
};

const Styleheader = styled(motion.div)`
  padding-top: 1rem;
  background-color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2rem;
  align-items: center;
  width: 100%; ;
`;
const Logo = styled(motion.div)`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  h3 {
    font-size: 2.3rem;
    font-family: "Bangers", sans-serif;
    background: -webkit-linear-gradient(#ffffff,#fff000);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding:0.5rem  }
  img {
    align-self: center;
    display: flex;
    width: 6rem;
  }
`;
const SearchBar = styled(motion.div)`
padding: 1rem;
  input {
   min-width:16rem;
    padding: 0.5rem 0.3rem;
    border-radius: 0.2rem;
    outline: none;    border: none;
    box-shadow: -1px 1px 20px 0px #356aff;
  }
  button {
      cursor: pointer;
    margin-left: 0.2rem;
    padding: 0.6rem;
    border-radius: 0.2rem;
    border: none;
    background-color: #180096;
    border: 1px solid white;
    box-shadow: -1px 1px 20px 0px #356aff;
    color: white;
    font-weight: 500;
  }
`;
export default Header;
