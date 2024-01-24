import React, { useState, useEffect } from "react";
import "./styles.css";
import { BasicButtons } from "../../pages/login";
import useUser from "../../hooks/useUser";

const Sidebar = () => {
    const { resetedCards, setResetedCards, allMatch, setAllMatch, gameMode, setGameMode } = useUser();
    const [elapsedTime, setElapsedTime] = useState(0);

    let timer;

    useEffect(() => {

        if (allMatch) {
            return;
        }

        if (resetedCards) {
            setElapsedTime(0);
            timer = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 0.01);
            }, 10);
        } else {
            timer = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 0.01);
            }, 10);
        }

        return () => clearInterval(timer);
    }, [resetedCards, allMatch]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        const centiseconds = Math.floor((timeInSeconds % 1) * 100);

        return `${minutes}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
    };

    const handleReset = () => {
        setResetedCards(true);
        setAllMatch(false);
        setGameMode({ ...gameMode });
        setElapsedTime(0);
    }

    return (
        <nav className="sidebar-container">

            <h1 className="sidebar-game-title">MEMORY GAME</h1>
            <main className="sidebar-main">
                <h2 className="sidebar-list-title">BEST RECORDS</h2>
                <div className="sidebar-list">
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                    <span className="sidebar-span">1º - Marcelo: 10seg</span>
                </div>
            </main>

            <div className="cronometer-container">
                <h2 className="sidebar-list-title">Your Time:</h2>
                <span className="sidebar-list-title">{formatTime(elapsedTime)}</span>
            </div>

            <BasicButtons
                btnType="button"
                btnName="Reset"
                onClick={handleReset}
            />
        </nav>
    )
}

export default Sidebar