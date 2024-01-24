import React, { useEffect, useState } from "react";
import "./styles.css";
import useUser from "../../hooks/useUser";
import cards from "../../cards";
import CardBack from "../../assets/card-back.png";



const Table = () => {
    const { gameMode, resetedCards, setAllMatch, allMatch } = useUser();
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
        const cardSelected = localCards.find(item => item.id === card.id);

        const onlyUnfoldCards = localCards.filter((cardLocal) => {
            if (!cardLocal.match && cardLocal.turned) {
                return cardLocal;
            }
        });

        if (onlyUnfoldCards.length > 1) return;

        if (onlyUnfoldCards.length && onlyUnfoldCards[0].name === cardSelected.name) {

            cardSelected.turned = !cardSelected.turned;
            setGameCards(localCards);

            if (cardSelected.id === onlyUnfoldCards[0].id) return;

            onlyUnfoldCards.push(cardSelected);
            onlyUnfoldCards.forEach((turnedCard) => {
                const index = localCards.findIndex(item => item.id === turnedCard.id);
                localCards[index] = { ...localCards[index], match: true };
            });

            const allCardsMatched = localCards.filter(item => item.match);

            if (allCardsMatched.length === localCards.length) {
                setAllMatch(true);
                setGameCards(localCards);
                return;
            }

            setGameCards(localCards);

            return;
        }

        cardSelected.turned = !cardSelected.turned;
        setGameCards(localCards);

        if (onlyUnfoldCards.length && onlyUnfoldCards[0].name !== cardSelected.name) {

            setTimeout(() => {
                localCards.forEach((item) => {
                    if (!item.match) {
                        return item.turned = false;
                    }
                });

                setGameCards([...localCards]);
            }, 500);
        }
    }

    let gameCardsNumber;

    useEffect(() => {
        gameCardsNumber = (gameMode.difficult === "easy" ? 5 : (gameMode.difficult === "medium" ? 7 : 9));
        setGameCards(selectRandomCards(gameCardsNumber, cards));
    }, [gameMode, resetedCards]);

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
                            onClick={!card.match ? (() => foldCard(card)) : undefined}
                        />
                    )
                })
                }
            </main>
        </div>
    )
}

export default Table