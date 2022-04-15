import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import '@fontsource/roboto/700.css';

const TittlePage = () => {
  const TittleStyle = {
    fontFamily: "roboto",
    fontWeight: "700",
    textAlign: "center",
    background: "#ddd",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
    color: "#000",
    padding: "5px",
  };

  return (
    <Box sx={TittleStyle}>
      <Typography variant="h4">Simple notes</Typography>
    </Box>
  );
};

export default TittlePage;
