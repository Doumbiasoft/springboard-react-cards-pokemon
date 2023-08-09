import React from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./useAxios";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  
  const url = "https://deckofcardsapi.com/api/deck/new/draw/";
  const [cards, addCard, resetCards] = useAxios(url);
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={()=> addCard()}>Add a playing card!</button>
        <button onClick={resetCards}>Reset playing cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
