import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Game=({name,released,image})=>{
    return(
        <StyleGame >
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} srcSet="" alt={name} />
        </StyleGame>
    )
}

const StyleGame=styled(motion.div)`
height: 21rem;
overflow:hidden;
box-shadow:0px 5px 30px rgb(0 0 0 / 30%);
border-radius: 1rem;
text-align:center;
img{
    width:100%;
    height: 100%;
    object-fit: cover;
    
}
`