import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import { useNavigate } from "react-router-dom";
import { SmallImage } from "../resize";
import parse from "html-react-parser";
import Android from "../Assets/Platforms Logo/android-os.svg";
import Ios from "../Assets/Platforms Logo/ios-logo.svg";
import Linux from "../Assets/Platforms Logo/linux-50.png";
import MacOS from "../Assets/Platforms Logo/mac-client-64.png";
import nintendo from "../Assets/Platforms Logo/nintendo.png";
import ps3 from "../Assets/Platforms Logo/ps3.svg";
import ps4 from "../Assets/Platforms Logo/ps4.svg";
import ps5 from "../Assets/Platforms Logo/ps5.svg";
import windows10 from "../Assets/Platforms Logo/windows-10.svg";
import xbox360 from "../Assets/Platforms Logo/xbox-360.svg";
import xboxone from "../Assets/Platforms Logo/xbox-one.svg";
import gamepad from "../Assets/Platforms Logo/gamepad.png";

const GameDetails = ({ pathId }) => {
  const getPlatorms = (platform) => {
    switch (platform) {
      case "PC":
        return windows10;
      case "Linux":
        return Linux;
      case "PlayStation 3":
        return ps3;
      case "macOS":
        return MacOS;
      case "iOS":
        return Ios;
      case "Xbox 360":
        return xbox360;
      case "Android":
        return Android;
      case "PlayStation 4":
        return ps4;
      case "Xbox One":
        return xboxone;
      case "Nintendo Switch":
        return nintendo;
      case "PlayStation 5":
        return ps5;
      default:
        return gamepad;
        break;
    }
  };

  const Navigate = useNavigate();
  const { game, snap, loading } = useSelector((state) => state.details);
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("card-shadow")) {
      document.body.style.overflow = "auto";
      Navigate("/");
    }
  };
  return (
    <>
      {!loading && (
        <CardShadow className="card-shadow" onClick={exitDetailHandler}>
          <Detail className="detail" layoutId={pathId}>
            <Stats className="stats">
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={game.rating} precision={0.1} readOnly /> <h5>{game.rating}</h5>
                <br />
                <div className="tag-wrap">
                {game.tags.map(tag=>((tag.id===31||tag.id===7||tag.id===30)?(<h5 className="tags" key={tag.id}>{tag.name}</h5>):("")))}</div>
              </div>

              <Info className="info">
                <h3>Platforms</h3>
                <Platforms className="platforms">
                  {game.platforms.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatorms(data.platform.name)}
                      alt={data.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media className="media">
              <motion.img
                layoutId={`image ${pathId}`}
                src={SmallImage(game.background_image,640)}
                alt={game.name}
                srcSet=""
              />
            </Media>
            <Description className="description">
              {parse(game.description)}
            </Description>
            <div className="gallery">
              {snap.results.map((snap) => (
                <img key={snap.id} src={SmallImage(snap.image, 640)} alt="" />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
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
  z-index: 5;
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
  @media screen and (max-width:500px) {
    align-items: flex-start;
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
  @media screen and (max-width:500px) {
    width:80%;
  padding: 2rem 1.5rem;
    
  }
`;
const Stats = styled(motion.div)`
  display: flex;
  .rating h3 {
    font-size: 1.6rem;
  }
  align-items: center;
  justify-content: space-between;
  .MuiRating-root{
    color:#db0505 !important;
  }
  h5{
    display: initial;
    position: relative;
    color: #db0505;
    bottom: 7px;
    font-weight: 1000;
    padding: 0.2rem;
  }
  .tags{
    display: inline-block;
    margin-top: 0.5rem;
    margin-left: 0.1rem;
    padding: 0.4rem;
    font-size: 0.6rem;
    background-color: #cdcdcd;
    border-radius: 0.7rem;
    text-transform: uppercase;
    color: #3a3338;
  }
  @media screen and (max-width:500px) {
   flex-wrap: wrap;
   justify-content: center;
    
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  flex-wrap: wrap ;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  h3 {
    padding: 0 0.5rem;
  }
  img {
    margin-left: 1rem;
    width: 2rem;
    height: 2rem;
    object-fit: cover;
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
  text-align:right;
  h3 {
    padding-bottom: 1rem;
  }
  @media screen and (max-width:500px){
  text-align:center;
  padding-top: 1rem;
    
  }
`;
const Description = styled(motion.div)`
  margin: 5rem 0;
`;
export default GameDetails;
