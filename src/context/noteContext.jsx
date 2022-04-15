import React, { useContext, useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const NoteContext = createContext({});

const NoteProvider = ({ children }) => {
  const dataStorage = localStorage.getItem("noteData");
  const initialData = dataStorage ? JSON.parse(dataStorage) : [];
  const [noteData, setNoteData] = useState(initialData);

  const addNewNote = (newNote) => {
    newNote.id = uuidv4();
    const newNoteData = [...noteData, newNote];
    setNoteData(newNoteData);
    localStorage.setItem("noteData", JSON.stringify(newNoteData));
  };

  const removeNoteById = (id) => {
    const notes = noteData.filter((notes) => {
      return notes.id != id;
    });
    setNoteData([...notes]);
    localStorage.setItem("noteData", JSON.stringify(notes));
  };

  const valueData = {
    noteData,
    addNewNote,
    removeNoteById,
  };

  return (
    <NoteContext.Provider value={valueData}>{children}</NoteContext.Provider>
  );
};

function useNote() {
  const context = useContext(NoteContext);

  if (!context) {
    throw new Error("useContext must be used in ToolProvider");
  }

  return context;
}

export { NoteContext, NoteProvider, useNote };
