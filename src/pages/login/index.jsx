import React from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";

const Login = () => {

    const { gameMode, setGameMode } = useUser();

    return (
        <div className="login-container">
            <div className="login-title-container">
                <h1>Start Game</h1>
                <h1>Mode</h1>
            </div>
        </div>
    )
}

export default Login