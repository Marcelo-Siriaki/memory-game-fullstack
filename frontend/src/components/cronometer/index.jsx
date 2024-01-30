import React, { useEffect } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";

export const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const centiseconds = Math.floor((timeInSeconds % 1) * 100);

    return `${minutes}:${String(seconds).padStart(2, "0")}.${String(centiseconds).padStart(2, "0")}`;
};

const Cronometer = () => {
    const { cronometerOn, allMatch, elapsedTime, setElapsedTime, records, setIsNewRecord, setGameMode, gameMode } = useUser();

    useEffect(() => {

        if (cronometerOn) {

            let timer;

            if (allMatch) {
                const isRecord = records.some(item => elapsedTime < item.records);

                if (isRecord || records.length < 15) {
                    setGameMode({ ...gameMode, record: elapsedTime });
                    return setIsNewRecord(true);
                }
                setIsNewRecord(false);
                return () => clearInterval(timer);
            }

            timer = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 0.01);
            }, 10);

            return () => clearInterval(timer);
        }
    }, [cronometerOn, allMatch]);

    return (
        <div>
            <span className="cronometer-text">{formatTime(elapsedTime)}</span>
        </div>
    )
}

export default Cronometer