import React, { useEffect, useState } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";

const CountdownModal = () => {

    const [countdown, setCountdown] = useState(3);
    const { countdownModalOpen, setCountdownModalOpen } = useUser();

    useEffect(() => {
        let timer;
        let localCount = countdown;
        if (localCount <= 0) {

            setCountdownModalOpen(false);
            return;
        }
        setInterval(() => {
            timer = setCountdown((prevTime) => {
                return prevTime - 1
            });
        }, 1000);

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