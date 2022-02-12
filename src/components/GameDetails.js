import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

const GameDetails = () => {
  const Navigate=useNavigate()
  const { game, snap,loading } = useSelector((state) =>  state.details)
  const exitDetailHandler=(e)=>{
      const element =e.target
      if(element.classList.contains("card-shadow")){
          document.body.style.overflow="auto";
          Navigate('/')
      }
  }
  return (
    <>
    {
      !loading &&(
    
    <CardShadow className="card-shadow" onClick={exitDetailHandler}>
      <Detail className="detail">
        <Stats className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>

          <Info className="info">
            <h3>Platforms</h3>
            <Platforms className="platforms">
              {game.platforms.map((data) => (
                <h3 key={data.platform.id}>{data.platform.name}</h3>
              ))}
              
            </Platforms>
          </Info>
        </Stats>
        <Media className="media">
          <img src={game.background_image} alt={game.name} srcSet="" />
        </Media>
        <Description className="description">
          <p>{game.description}</p>
        </Description>
        <div className="gallery">
          {snap.results.map((snap) => (
            <img key={snap.id} src={snap.image} alt="" />
          ))}
          
        </div>
      </Detail>
    </CardShadow>)}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: orange;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Detail = styled(motion.div)`
  width: 60%;
  border-radius: 1rem;
  padding: 2rem 6rem;
  background-color: white;
  position: absolute;

  color: black;
  img {
    width: 100%;
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  h3{
    padding:0 0.5rem;
  }
  img {
    margin-left: 3rem;
    
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
      width: 100%;
      object-fit: cover;
    }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Description=styled(motion.div)`
margin:5rem 0`
export default GameDetails;
