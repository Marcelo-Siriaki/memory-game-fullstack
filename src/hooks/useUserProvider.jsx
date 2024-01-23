import { useState } from "react";

export function useUserProvider() {

  const [gameMode, setGameMode] = useState({
    showAll: true,
    difficult: "easy"
  });


  return {
    gameMode,
    setGameMode,
  }
}
