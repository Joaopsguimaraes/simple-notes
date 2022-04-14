import React from 'react';
import AddNotes from '../AddNotes';
import Notes from '../Notes';
import TittlePage from '../TittlePage/indes';

const HomeNotes = () => {
    return(
        <>
            <TittlePage/>
            <AddNotes />
            <Notes/>
        </>
    )
}

export default HomeNotes;