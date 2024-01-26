import React, { useEffect } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";

const CountdownModal = () => {

    const { countdownModalOpen, setCountdownModalOpen, setCronometerOn, countdown, setCountdown } = useUser();

    useEffect(() => {
        let timer;
        if (countdownModalOpen && countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prevTime) => {
                    if (prevTime > 1) {
                        return prevTime - 1
                    } else {
                        setCountdownModalOpen(false); // Essa state dentro do useEffect gera um warning. Investigar.
                        clearInterval(timer);
                        setCronometerOn(true);
                        return 0;
                    }
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown-backdrop">
            <main className="countdown-container">
                <div>{countdown}</div>
            </main>
        </div>
    )
}

export default CountdownModal