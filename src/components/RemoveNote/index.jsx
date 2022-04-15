import { Button } from "@mui/material";
import React from "react";
import { HiDocumentRemove } from "react-icons/hi";
import { useNote } from "../../context/noteContext";

const RemoveNote = (props) => {
  const { removeNoteById } = useNote();
  return (
    <Button onClick={() => removeNoteById(props.id)} color="error">
      Remove
      <HiDocumentRemove />
    </Button>
  );
};

export default RemoveNote;
