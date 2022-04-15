import React from "react";
import { Box } from "@mui/system";
import "@fontsource/roboto/300.css";
import RemoveNote from "../RemoveNote";

const Notes = (props) => {
  const notesStyle = {
    width: "80%",
    heigth: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "10px",
    border: "1px solid #fff",
    borderRadius: "10px",
    padding: "10px",
    background: "#eee",
    color: "#000",
    fontFamily: "roboto",
    textAlign: "justify",
  };

  return (
    <Box sx={notesStyle}>
      <h3>{props.tittle}</h3>
      <p>{props.content}</p>
      <RemoveNote id={props.id} />
    </Box>
  );
};

export default Notes;
