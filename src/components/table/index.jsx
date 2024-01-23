import React, { useEffect, useState } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";
import cards from "../../cards";

const Table = () => {
    const { gameMode } = useUser();
    const [gameCards, setGameCards] = useState([]);

    const selectRandomCards = (quantity, array) => {
        let copyArray = [...array];
        let selectedCards = [];

        for (let i = 0; i < quantity; i++) {
            const randomIndex = Math.floor(Math.random() * copyArray.length);
            const selectedCard = copyArray.splice(randomIndex, 1)[0];
            selectedCards.push(selectedCard);
        }
        return selectedCards;
    }

    let gameCardsNumber;

    useEffect(() => {
        gameCardsNumber = (gameMode.difficult === "easy" ? 5 : (gameMode.difficult === "medium" ? 7 : 9));
        setGameCards(selectRandomCards(gameCardsNumber, cards));
    }, [gameMode]);

    return (
        <div className="table-container">
            <div className="teste">{gameCards.length}</div>

        </div>
    )
}

export default Table