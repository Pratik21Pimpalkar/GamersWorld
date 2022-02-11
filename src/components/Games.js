import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import loadDetail from "../actions/DetailAction";
export const Game = ({ name, released, image, id }) => {
  // Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <StyleGame onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} srcSet="" alt={name} />
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
