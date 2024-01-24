import React from "react";
import "./styles.css";
import { BasicButtons } from "../../pages/login";
import useUser from "../../hooks/useUser";

const Sidebar = () => {
    const { resetedCards, setResetedCards } = useUser();

    const handleReset = () => {
        setResetedCards(!resetedCards)
        console.log("Clicou");
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
                <span className="sidebar-list-title">Running time</span>
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