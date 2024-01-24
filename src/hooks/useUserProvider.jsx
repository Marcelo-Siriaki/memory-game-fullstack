import { useState } from "react";

export function useUserProvider() {

  const [gameMode, setGameMode] = useState({
    showAll: true,
    difficult: "easy"
  });

  const [resetedCards, setResetedCards] = useState(false);


  return {
    gameMode,
    setGameMode,
    resetedCards,
    setResetedCards,
  }
}
