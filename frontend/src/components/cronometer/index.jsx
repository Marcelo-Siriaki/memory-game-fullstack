import React, { useEffect } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";

const Cronometer = () => {
    const { cronometerOn, resetedCards, allMatch, elapsedTime, setElapsedTime } = useUser();

    useEffect(() => {

        if (cronometerOn) {

            let timer;

            if (allMatch) {
                return;
            }

            if (resetedCards) {
                timer = setInterval(() => {
                    setElapsedTime((prevTime) => prevTime + 0.01);
                }, 10);
            } else {
                timer = setInterval(() => {
                    setElapsedTime((prevTime) => prevTime + 0.01);
                }, 10);
            }

            return () => clearInterval(timer);
        }
    }, [cronometerOn, allMatch]);

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        const centiseconds = Math.floor((timeInSeconds % 1) * 100);

        return `${minutes}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
    };

    return (
        <div>
            <span className="cronometer-text">{formatTime(elapsedTime)}</span>
        </div>
    )
}

export default Cronometer