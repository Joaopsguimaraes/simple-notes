import React, { useState } from "react";
import "./style.css";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { FiPlus } from "react-icons/fi";
import { useNote } from "../../context/noteContext";

const AddNotes = () => {
  const [noteTittle, setNoteTittle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const { addNewNote } = useNote();

  const handleTittle = (event) => setNoteTittle(event.target.value);
  const handleContent = (event) => setNoteContent(event.target.value);

  const createNote = (event) => {
    addNewNote({
      tittle: noteTittle,
      content: noteContent,
    });
    event.preventDefault();
    setNoteTittle("");
    setNoteContent("");
  };

  return (
    <Box className="add-notes" component="form" onSubmit={createNote}>
      <TextField
        sx={{
          width: "100%",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.20) 0px 1px 4px",
        }}
        label="Tittle Note"
        value={noteTittle}
        onChange={handleTittle}
        multiline
        rows={1}
      />
      <TextField
        sx={{
          width: "100%",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "rgba(0, 0, 0, 0.20) 0px 1px 4px",
        }}
        label="Description Note"
        value={noteContent}
        onChange={handleContent}
        multiline
        rows={7}
      />
      <Button variant="contained" color="primary" type="submit">
        <FiPlus /> Add Note
      </Button>
    </Box>
  );
};

export default AddNotes;
