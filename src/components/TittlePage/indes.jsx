import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';

const TittlePage = () => {

    const TittleStyle = {
        fontFamily: 'roboto',
        fontWeight: '500',
        textAlign: 'center',
        background: '#ccc',
        padding:'10px'
    }

    return (
        <Box sx={TittleStyle}>
            <Typography variant='h2'>Simple Note</Typography>
        </Box>
    )
}

export default TittlePage;