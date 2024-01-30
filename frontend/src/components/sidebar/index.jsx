import React, { useEffect } from "react";
import "./styles.css";
import { BasicButtons } from "../../pages/menu";
import useUser from "../../hooks/useUser";
import Cronometer from "../cronometer";
import { useNavigate } from "react-router-dom";
import instanceAxios from "../../services/api";

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
        setRecords,
        isNewRecord,
    } = useUser();


    const handleReset = () => {
        setResetedCards(true);
        setAllMatch(false);
        setGameMode({ ...gameMode, player: "" });
        setCountdownModalOpen(true);
        setElapsedTime(0);
        setCountdown(3);
        setCronometerOn(false);
    }

    const handleBackToMenu = () => {
        setResetedCards(true);
        setAllMatch(false);
        setGameMode({ ...gameMode, player: "" });
        setElapsedTime(0);
        setCountdown(3);
        setCronometerOn(false);
        navigate("/");
    }

    const loadRecords = async () => {

        try {

            const response = await instanceAxios.get(`/records?difficult=${gameMode.difficult}`);
            setRecords(response.data);

        } catch (error) {
            console.log(error);
        }

    }


    useEffect(() => {

        loadRecords();

    }, [isNewRecord]);

    return (
        <nav className="sidebar-container">

            <h1 className="sidebar-game-title">MEMORY GAME</h1>
            <main className="sidebar-main">
                <h2 className="sidebar-list-title">BEST RECORDS</h2>
                <div className="sidebar-level-list">
                    <span className="sidebar-list-subtitle">Level {gameMode.difficult}</span>
                    <div className="sidebar-list">
                        {records.length ?
                            (records.map((item) => {
                                return <span key={item.id} className="sidebar-span">{item.player}: {item.records}</span>
                            })
                            ) : (
                                <span className="sidebar-span">1º - Marcelo: 59 seg</span>
                            )}

                    </div>
                </div>
            </main>

            <div className="cronometer-container">
                <h2 className="sidebar-list-title">Your Time:</h2>
                <Cronometer />
            </div>

            <div className="sidebar-btns-container">
                <BasicButtons
                    btnType="button"
                    btnName="Reset / Start"
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