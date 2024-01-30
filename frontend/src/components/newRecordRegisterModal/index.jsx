import React from "react";
import useUser from "../../hooks/useUser";
import { formatTime } from "../cronometer";
import "./styles.css";
import instanceAxios from "../../services/api";

const NewRecordRegisterModal = () => {

    const { gameMode, setGameMode, setIsNewRecord } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const editedRecord = Number(gameMode.record.toFixed(2));
            let sendData = { ...gameMode, record: editedRecord };

            if (!gameMode.player) {
                sendData = { ...sendData, player: "no name" };
            }

            const response = await instanceAxios.post("/new-record", { ...sendData, record: editedRecord });
            setIsNewRecord(false);

        } catch (error) {
            console.log(error.message);
        }

    }

    return (
        <div className="new-record-register-modal-backdrop">
            <form
                className="new-record-register-modal-container"
                onSubmit={handleSubmit}
            >
                <h1 className="new-record-modal-title">New Record!</h1>
                <input
                    className="new-record-input"
                    placeholder="Your name"
                    type="text"
                    value={gameMode.player}
                    name="player"
                    onChange={(e) => setGameMode({ ...gameMode, [e.target.name]: e.target.value })}
                />
                <h2>{formatTime(gameMode.record)}</h2>
                <h2>Difficult {gameMode.difficult}</h2>
                <button
                    className="new-record-modal-btn"
                    type="submit"
                >
                    Save
                </button>

            </form>
        </div>
    )
}

export default NewRecordRegisterModal