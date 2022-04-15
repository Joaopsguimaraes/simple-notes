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
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
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
