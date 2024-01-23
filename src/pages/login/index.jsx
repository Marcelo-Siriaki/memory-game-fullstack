import React, { useState } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";

const Login = () => {
    const [mode, setMode] = useState(false);
    const { gameMode, setGameMode } = useUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        setMode(false);
    }

    const handleSelectDifficult = (e) => {
        setGameMode({ ...gameMode, difficult: e.target.value });
    }

    const handleSelectDisplay = (e) => {
        setGameMode({ ...gameMode, showAll: e.target.value });
    }

    return (
        <div className="login-container">
            {mode ?
                (<div className="login-title-container">
                    <form
                        className="login-form-mode"
                        onSubmit={handleSubmit}
                    >
                        <label>
                            Select difficult
                            <select
                                onChange={(e) => handleSelectDifficult(e)}
                                value={gameMode.difficult}
                            >
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </label>
                        <label>
                            Select display option
                            <select
                                onChange={handleSelectDisplay}
                                value={gameMode.showAll}
                            >
                                <option value={true}>Show all cards before start</option>
                                <option value={false}>Don't show any card</option>
                            </select>
                        </label>

                        <button type="submit">Ready</button>
                    </form>
                </div>)
                :
                (<div className="login-title-container">
                    <h1>Start Game</h1>
                    <h1 onClick={() => setMode(true)}>Mode</h1>
                </div>)}
        </div>
    )
}

export default Login