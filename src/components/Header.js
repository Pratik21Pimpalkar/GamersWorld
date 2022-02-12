import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <Styleheader>
        <Logo>
        <img src="https://img.icons8.com/external-icongeek26-outline-gradient-icongeek26/100/000000/external-gamer-game-development-icongeek26-outline-gradient-icongeek26.png"/>
            <h3>Gamer World</h3>
        </Logo>
        <SearchBar>
            <input type="text" />
            <button>Search</button>
        </SearchBar>
    </Styleheader>
  )
}

const Styleheader=styled(motion.div)`
padding-top:1rem ;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
gap: 2rem;
align-items:center ;
width:100%;;
`
const Logo=styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center;
h3{
    font-size: 1.9rem;
    font-family: 'Games', sans-serif;
    
}
img{
    align-self: center;
    display: flex;
    width: 4rem;
}

`
const SearchBar=styled(motion.div)`
input{
    width: 25rem;
    padding: 0.5rem 0.3rem;
}
button{
    margin-left:0.2rem;
    padding: 0.6rem;
    border-radius: 0.2rem;
    border: none;
    background-color: pink;
    border: 1px solid darkred;
}
`
export default Header