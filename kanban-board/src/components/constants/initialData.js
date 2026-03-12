import { COLUMN_IDS } from "./columns";

export const INITIAL_CARDS = {
  "card-1": {
    id: "card-1",
    title: "Set up project",
    description:
      "Create the React app structure and install required dependencies.",
  },
  "card-2": {
    id: "card-2",
    title: "Build header",
    description:
      "Add the board title and top-level layout for the Kanban page.",
  },
  "card-3": {
    id: "card-3",
    title: "Implement add card flow",
    description: "Allow users to create a new task inside any column.",
  },
  "card-4": {
    id: "card-4",
    title: "Enable drag and drop",
    description: "Move cards between columns using @hello-pangea/dnd.",
  },
  "card-5": {
    id: "card-5",
    title: "Support card editing",
    description:
      "Edit task title and description inline without leaving the board.",
  },
  "card-6": {
    id: "card-6",
    title: "Persist board state",
    description:
      "Save the latest board data in localStorage and restore it on refresh.",
  },
};

export const INITIAL_COLUMNS = {
  [COLUMN_IDS.BACKLOG]: {
    id: COLUMN_IDS.BACKLOG,
    title: "Backlog",
    cardIds: ["card-1", "card-2", "card-3"],
  },
  [COLUMN_IDS.IN_PROGRESS]: {
    id: COLUMN_IDS.IN_PROGRESS,
    title: "In Progress",
    cardIds: ["card-4", "card-5"],
  },
  [COLUMN_IDS.DONE]: {
    id: COLUMN_IDS.DONE,
    title: "Done",
    cardIds: ["card-6"],
  },
};
