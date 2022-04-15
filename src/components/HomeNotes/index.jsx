import React from "react";
import "./style.css";
import { useNote } from "../../context/noteContext";
import AddNotes from "../AddNotes";
import Notes from "../Notes";
import TittlePage from "../TittlePage/indes";

const HomeNotes = () => {
  const { noteData } = useNote();
  return (
    <>
      <TittlePage />
      <div className="Notes-container">
        <AddNotes />
        <ul className="notes-list">
          {noteData.map((notes, index) => (
            <li key={index}>
              <Notes
                id={notes.id}
                tittle={notes.tittle}
                content={notes.content}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default HomeNotes;
