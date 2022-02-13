import React, { useEffect } from "react";
import LoadGames from "../actions/GamesAction";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Game } from "../components/Games";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import GameDetail from "../components/GameDetails";import { fadeIn } from "../Animation/animation";
export const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  // console.log(pathId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LoadGames());
  }, [dispatch]);
  const { popular, newGames, upcoming ,search} = useSelector((state) => state.games);

  return (
    <GameList variants={fadeIn} initial="hidden" transition="transistion" animate="show">
      <AnimateSharedLayout type="crossfade">
      <AnimatePresence>{pathId && <GameDetail pathId={pathId} />}</AnimatePresence>
      {search.length ? <div>
      <h2>Searched Games Results</h2>
      <Games>
        {search.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            key={game.id}
            image={game.background_image}
          />
        ))}
      </Games></div>:""}
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
      <h2>Other Unique Games</h2>
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

 @media screen and (max-width:400px){
   padding: 0;
 }
`;
const Games = styled(motion.div)`

  min-height: 90vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 6rem;
  
`;
