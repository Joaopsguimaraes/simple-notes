import React from "react";
import { Box } from "@mui/system";
import "@fontsource/roboto/300.css";
import { Container } from "@mui/material";

const Notes = (props) => {
  const notesStyle = {
    width: "80%",
    heigth: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'space-around',
    flexWrap:'wrap',
    gap: "10px",
    border: "3px solid #000",
    padding: "10px",
    background: "#eee",
    color: "#000",
    fontFamily: "roboto",
    textAlign: "justify",
  };

  const containerStyle ={
      margin:'1rem auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gridTemplateRows: 'auto',
      gap:'20px',
      justifyItems:'stretch',
      alignItems: 'center',

  }

  return (
    <Container sx={containerStyle} fixed>
        <Box sx={notesStyle}>
        <h3>Test tittle</h3>
        <p>Test content</p>
        </Box>
    </Container>
  );
};

export default Notes;
