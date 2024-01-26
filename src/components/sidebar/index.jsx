import React from "react";
import "./styles.css";
import { BasicButtons } from "../../pages/login";
import useUser from "../../hooks/useUser";
import Cronometer from "../cronometer";

const Sidebar = () => {
    const {
        setResetedCards,
        setAllMatch,
        gameMode,
        setGameMode,
        setCountdownModalOpen,
        setElapsedTime,
        setCronometerOn,
        setCountdown,
    } = useUser();


    const handleReset = () => {
        setResetedCards(true);
        setAllMatch(false);
        setGameMode({ ...gameMode });
        setCountdownModalOpen(true);
        setElapsedTime(0);
        setCountdown(3);
        setCronometerOn(false);
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
                <Cronometer />
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