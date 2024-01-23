import React, { useEffect, useState } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";
import cards from "../../cards";
import CardBack from "../../assets/card-back.png";

const Table = () => {
    const { gameMode } = useUser();
    const [gameCards, setGameCards] = useState([]);

    const selectRandomCards = (quantity, array) => {
        let copyArray = [...array];
        let selectedCards = [];

        for (let i = 0; i < quantity; i++) {
            const randomIndex = Math.floor(Math.random() * copyArray.length);
            let selectedCard = copyArray.splice(randomIndex, 1)[0];
            selectedCard = { ...selectedCard, id: i + 1 }
            selectedCards.push(selectedCard);
            selectedCard = { ...selectedCard, id: quantity + i + 1 }
            selectedCards.push(selectedCard);
        }

        for (let i = selectedCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [selectedCards[i], selectedCards[j]] = [selectedCards[j], selectedCards[i]];
        }

        return selectedCards;
    }

    const foldCard = (card) => {
        const localCards = [...gameCards];
        const cardIndex = localCards.findIndex(item => item.id === card.id);
        localCards[cardIndex].turned = !localCards[cardIndex].turned;

        const turnedCards = localCards.filter(cardLocal => cardLocal.turned);

        if (turnedCards.length > 1) {
            if (turnedCards[0].name === turnedCards[1].name) {

            }
        }

        setGameCards(localCards);

    }

    let gameCardsNumber;

    useEffect(() => {
        gameCardsNumber = (gameMode.difficult === "easy" ? 5 : (gameMode.difficult === "medium" ? 7 : 9));
        setGameCards(selectRandomCards(gameCardsNumber, cards));
    }, [gameMode]);

    return (
        <div className="table-container">
            <main className="cards-container">
                {gameCards.map((card) => {
                    return (
                        <div
                            className="table-card"
                            key={card.id}
                            name={card.name}
                            style={card.turned ? { backgroundImage: `url(${card.image})` } : { backgroundImage: `url(${CardBack})` }}
                            onClick={!card.match && (() => foldCard(card))}
                        />
                    )
                })
                }
            </main>
        </div>
    )
}

export default Table