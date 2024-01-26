import { useState } from "react";

export function useUserProvider() {

  const [gameMode, setGameMode] = useState({
    showAll: true,
    difficult: "easy"
  });

  const [records, setRecords] = useState([]);

  const [resetedCards, setResetedCards] = useState(false);
  const [allMatch, setAllMatch] = useState(false);
  const [countdownModalOpen, setCountdownModalOpen] = useState(false);
  const [cronometerOn, setCronometerOn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [countdown, setCountdown] = useState(3);


  return {
    gameMode,
    setGameMode,
    resetedCards,
    setResetedCards,
    allMatch,
    setAllMatch,
    countdownModalOpen,
    setCountdownModalOpen,
    cronometerOn,
    setCronometerOn,
    elapsedTime,
    setElapsedTime,
    countdown,
    setCountdown,
    records,
    setRecords,
  }
}
