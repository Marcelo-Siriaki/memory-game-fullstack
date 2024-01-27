import { useState } from "react";

export function useUserProvider() {

  const [gameMode, setGameMode] = useState({
    showAll: true,
    difficult: "easy",
    player: "",
    record: ""
  });

  const [records, setRecords] = useState([]);

  const [resetedCards, setResetedCards] = useState(false);
  const [allMatch, setAllMatch] = useState(false);
  const [countdownModalOpen, setCountdownModalOpen] = useState(false);
  const [cronometerOn, setCronometerOn] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [isNewRecord, setIsNewRecord] = useState(false);


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
    isNewRecord,
    setIsNewRecord,
  }
}
