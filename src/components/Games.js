import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { popup } from "../Animation/animation";
import { SmallImage } from "../resize";
import loadDetail from "../actions/DetailAction";
export const Game = ({ name, released, image, id }) => {
  const stringPathId=id.toString();
  
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow='hidden'
    dispatch(loadDetail(id));
  };
  return (
    <StyleGame  variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img layoutId={`image ${stringPathId}`} src={image} srcSet="" alt={name} />
      </Link>
    </StyleGame>
  );
};

const StyleGame = styled(motion.div)`
  height: 21rem;
  overflow: hidden;
  box-shadow: 0px 5px 30px rgb(0 0 0 / 30%);
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

`;
