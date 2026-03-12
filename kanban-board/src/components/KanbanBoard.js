import React, { useEffect, useState } from "react";

import { COLUMN_ORDER } from "./constants/columns";
import { INITIAL_CARDS, INITIAL_COLUMNS } from "./constants/initialData";
import Column from "./Column";

import "./kanbanBoard.css";
import { DragDropContext } from "@hello-pangea/dnd";

function KanbanBoard() {
  const [cards, setCards] = useState(() => {
    const initialCards = JSON.parse(localStorage.getItem("cards"));
    return initialCards || INITIAL_CARDS;
  });
  const [columns, setColumns] = useState(() => {
    const initialColumns = JSON.parse(localStorage.getItem("columns"));
    return initialColumns || INITIAL_COLUMNS;
  });

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns, cards]);

  const handleDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const { index: sourceIndex, droppableId: sourceDroppableId } = source;

    const { index: destinationIndex, droppableId: destinationDroppableId } =
      destination;

    if (
      sourceIndex === destinationIndex &&
      sourceDroppableId === destinationDroppableId
    ) {
      return;
    }

    const destinationColumn = columns[destinationDroppableId];
    const sourceColumn = columns[sourceDroppableId];

    if (sourceDroppableId === destinationDroppableId) {
      const updatedCardIds = [...sourceColumn.cardIds];
      const [movedCardId] = updatedCardIds.splice(sourceIndex, 1);
      updatedCardIds.splice(destinationIndex, 0, movedCardId);

      setColumns({
        ...columns,
        [sourceDroppableId]: {
          ...sourceColumn,
          cardIds: updatedCardIds,
        },
      });
      return;
    }

    const sourceCardIds = [...sourceColumn.cardIds];
    const destinationCardIds = [...destinationColumn.cardIds];

    const [moveId] = sourceCardIds.splice(sourceIndex, 1);
    destinationCardIds.splice(destinationIndex, 0, moveId);

    setColumns({
      ...columns,
      [sourceDroppableId]: { ...sourceColumn, cardIds: sourceCardIds },
      [destinationDroppableId]: {
        ...destinationColumn,
        cardIds: destinationCardIds,
      },
    });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="container">
        {COLUMN_ORDER.map((column) => {
          return (
            <Column
              columns={columns}
              cards={cards}
              column={column}
              key={column}
              setCards={setCards}
              setColumns={setColumns}
            />
          );
        })}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
