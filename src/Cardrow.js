// src/Cardrow.js

import React from "react";
import Card from "./Card";
import "./Cardrow.css";

const cardsData = [
  {
    title: "Card 1",
    description: "This is the first card",
    image: "card1.jpg",
  },
  {
    title: "Card 2",
    description: "This is the second card",
    image: "card2.jpg",
  },
  {
    title: "Card 3",
    description: "This is the third card",
    image: "card3.jpg",
  },
];

function Cardrow() {
  return (
    <div className="card-row">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}

export default Cardrow;
