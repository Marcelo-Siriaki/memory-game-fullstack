import React from "react";
import "./styles.css";
import { BasicButtons } from "../../pages/menu";
import useUser from "../../hooks/useUser";
import Cronometer from "../cronometer";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();

    const {
        setResetedCards,
        setAllMatch,
        gameMode,
        setGameMode,
        setCountdownModalOpen,
        setElapsedTime,
        setCronometerOn,
        setCountdown,
        records,
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

    const handleBackToMenu = () => {
        setResetedCards(true);
        setAllMatch(false);
        setGameMode({ ...gameMode });
        setElapsedTime(0);
        setCountdown(3);
        setCronometerOn(false);
        navigate("/");
    }

    return (
        <nav className="sidebar-container">

            <h1 className="sidebar-game-title">MEMORY GAME</h1>
            <main className="sidebar-main">
                <h2 className="sidebar-list-title">BEST RECORDS</h2>
                <span className="sidebar-list-subtitle">Level {gameMode.difficult}</span>
                <div className="sidebar-list">
                    {records.length ?
                        (records.map((item) => {
                            return <span key={item.id} className="sidebar-span">{item.player}: {item.record}</span>
                        })
                        ) : (
                            <span className="sidebar-span">1º - Marcelo: 10seg</span>
                        )}

                </div>
            </main>

            <div className="cronometer-container">
                <h2 className="sidebar-list-title">Your Time:</h2>
                <Cronometer />
            </div>

            <div className="sidebar-btns-container">
                <BasicButtons
                    btnType="button"
                    btnName="Reset"
                    onClick={handleReset}
                />
                <BasicButtons
                    btnType="button"
                    btnName="Back to Menu"
                    onClick={handleBackToMenu}
                />
            </div>
        </nav>
    )
}

export default Sidebar