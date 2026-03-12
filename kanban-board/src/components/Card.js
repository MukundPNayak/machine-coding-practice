import React, { useState } from "react";

import { Draggable } from "@hello-pangea/dnd";

import "./card.css";
import CardEdit from "./CardEdit";

const Card = ({ cards, card, index, setCards, onDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const currentCard = cards[card] || {};

  const { title, description } = currentCard;

  const handleSave = ({ inputTitle, inputDescrption }) => {
    setIsEditMode(false);
    setCards((prev) => ({
      ...prev,
      [card]: {
        ...prev[card],
        title: inputTitle,
        description: inputDescrption,
      },
    }));
  };

  if (isEditMode) {
    return (
      <CardEdit
        titleInitialValue={title}
        descriptionInitialValue={description}
        onCancel={() => setIsEditMode(false)}
        onSave={handleSave}
      />
    );
  }

  const handleDelete = () => {
    setCards((prev) => {
      const newObj = { ...prev };
      delete newObj[card];
      return newObj;
    });
    onDelete(card);
  };

  return (
    <Draggable draggableId={card} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="card-heading">
            <h4>{title}</h4>
            <button onClick={() => setIsEditMode(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <span>{description}</span>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
