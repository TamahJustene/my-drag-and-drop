import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import "./Canvas.css";
import Card from "./Card";

const Canvas = () => {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      text: "This is some dummy text for the card. Click show more to read the full content.",
      x: 100,
      y: 100,
      width: 200,
      height: 100,
    };
    setCards([...cards, newCard]);
  };

  return (
    <div className="canvas-container">
      <button className="btn btn-primary mb-3" onClick={addCard}>
        Add Card
      </button>
      <ArcherContainer strokeColor="red">
        <div className="canvas" id="canvas">
          {cards.map((card, index) => (
            <ArcherElement
              key={card.id}
              id={`card-${card.id}`}
              relations={[
                {
                  targetId: `card-${cards[index + 1]?.id}`,
                  targetAnchor: "top",
                  sourceAnchor: "bottom",
                },
              ]}
            >
              <Card key={card.id} card={card} />
            </ArcherElement>
          ))}
        </div>
      </ArcherContainer>
    </div>
  );
};

export default Canvas;
