import React, { useState } from "react";

import Card from "./Card";

import "./column.css";
import { Droppable } from "@hello-pangea/dnd";
import CardEdit from "./CardEdit";

const Column = (props) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const { columns, column, cards, setCards, setColumns } = props;

  const currentColumnConfig = columns[column] || {};

  const { title, cardIds } = currentColumnConfig;

  const handleCancel = () => {
    setIsAddingCard(false);
  };

  const handleDelete = (cardId) => {
    setColumns((prev) => ({
      ...prev,
      [column]: {
        ...prev[column],
        cardIds: prev[column].cardIds.filter((id) => cardId !== id),
      },
    }));
  };

  const handleSave = ({ inputTitle, inputDescrption }) => {
    setIsAddingCard(false);
    const id = "card" + Math.random().toString(16).slice(2);
    const newCard = {
      id,
      title: inputTitle,
      description: inputDescrption,
    };

    setCards((prev) => ({
      ...prev,
      [id]: newCard,
    }));

    setColumns((prev) => ({
      ...prev,
      [column]: {
        ...prev[column],
        cardIds: [...prev[column].cardIds, id],
      },
    }));
  };

  return (
    <Droppable droppableId={column}>
      {(provided) => (
        <div
          className="column"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h2>{title}</h2>
          <button className="addBtn" onClick={() => setIsAddingCard(true)}>
            Add New Task
          </button>
          {cardIds.map((card, index) => {
            return (
              <Card
                cards={cards}
                card={card}
                key={card}
                index={index}
                setCards={setCards}
                onDelete={handleDelete}
              />
            );
          })}
          {isAddingCard && (
            <CardEdit onCancel={handleCancel} onSave={handleSave} />
          )}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
