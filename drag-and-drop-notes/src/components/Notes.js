import React, { createRef, useEffect, useRef } from "react";

import Note from "./Note.js";

import "./notes.css";

const Notes = ({ notes, setNotes }) => {
  const determinePosition = () => {
    const maxHeight = window.innerHeight - 250;
    const maxWidth = window.innerWidth - 250;

    const top = Math.floor(Math.random() * maxHeight);

    const left = Math.floor(Math.random() * maxWidth);

    return {
      top: `${top}px`,
      left: `${left}px`,
    };
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find(
        (savedNote) => note.id === savedNote.id
      );
      if (savedNote) return savedNote;

      const position = determinePosition();
      return {
        ...note,
        ...position,
      };
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  }, [notes.length]);

  const notesRef = useRef({});

  const handleMouseDown = (e, note) => {
    const { id, top: currentTop, left: currentLeft } = note;
    const noteRef = notesRef.current[id];
    const rect = noteRef.current.getBoundingClientRect();

    const offSetX =
      e.clientX -
      rect.left; /* e.clientX cursors left position from browsers left, rect.left notes left position from broser */
    const offSetY = e.clientY - rect.top;
    /* offSetX cursors clicks left position from notes left */

    const handleMouseMove = (e) => {
      const newLeft = e.clientX - offSetX;
      const newTop = e.clientY - offSetY;

      noteRef.current.style.top = `${newTop}px`;
      noteRef.current.style.left = `${newLeft}px`;
    };

    const handleMouseup = () => {
      const rect = noteRef.current.getBoundingClientRect();

      const top = `${rect.top}px`;
      const left = `${rect.left}px`;

      if (checkForOverlap(id) || isOutofviewPort(id)) {
        noteRef.current.style.top = currentTop;
        noteRef.current.style.left = currentLeft;
      } else {
        const updatedNotes = notes.map((curr) => {
          return curr.id === note.id ? { ...curr, top, left } : curr;
        });
        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
      }

      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseup);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseup);
  };

  const isOutofviewPort = (selectedNoteId) => {
    const selectedNoteRef = notesRef.current[selectedNoteId].current;
    const selectedNoteRect = selectedNoteRef.getBoundingClientRect();

    return (
      selectedNoteRect.left < 0 ||
      selectedNoteRect.top < 0 ||
      selectedNoteRect.right > window.innerWidth ||
      selectedNoteRect.bottom > window.innerHeight
    );
  };

  const checkForOverlap = (selectedNoteId) => {
    const selectedNoteRef = notesRef.current[selectedNoteId].current;
    const rect = selectedNoteRef.getBoundingClientRect();

    return notes.some((note) => {
      if (note.id === selectedNoteId) return false;

      const currentNoteRef = notesRef.current[note.id].current;
      const currentRect = currentNoteRef.getBoundingClientRect();

      const notOverlap =
        rect.left > currentRect.right ||
        rect.right < currentRect.left ||
        rect.bottom < currentRect.top ||
        rect.top > currentRect.bottom;

      return !notOverlap;
    });
  };

  return (
    <div>
      {notes.map((note, index) => {
        const { id } = note;

        if (!notesRef.current[id]) {
          notesRef.current[id] = createRef();
        }

        return (
          <Note
            id={id}
            note={note}
            index={index}
            ref={notesRef.current[id]}
            onMouseDown={(e) => handleMouseDown(e, note)}
          />
        );
      })}
    </div>
  );
};

export default Notes;
