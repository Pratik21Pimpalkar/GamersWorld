import React, { useEffect } from "react";
import LoadGames from "../actions/GamesAction";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Game } from "../components/Games";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import GameDetail from "../components/GameDetails";
export const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // console.log(pathId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
      <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
          />
        ))}
      </Games>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
          />
        ))}
      </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 4rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 6rem;
`;
