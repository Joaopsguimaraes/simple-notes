import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const AddNotes = () => {

    const addNotesStyle = {
        margin: '10px 15px',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'flex-start',
        gap: '10px',
        float:'left',
    }

  const [tittle, setTittle] = useState('');
  const [content, setContent] = useState('');

  const handleTittle = (event) => setTittle(event.target.value);
  const handleContent = (event) => setContent(event.target.value);

  return (
    <Box sx={addNotesStyle} component="form" >
      <TextField label="Tittle Note" value={tittle} onChange={handleTittle} />
      <TextField
        label="Content Note"
        value={content}
        onChange={handleContent}
        multiline
        rows={5}
      />
      <Button variant="contained" color="success" type="submit">
        Adicionar Nota
      </Button>
    </Box>
  );
};

export default AddNotes;
