import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, deleteNote, selectNotes } from './noterSlice';


export function Noter() {
    const savedNotes = useSelector(selectNotes);
    const [newNote, saveNewNote] = useState('');
    const dispatch = useDispatch();
    
    const notes = savedNotes.map( (note, i) => {
        return (
        <div key={i}>
            #{i+1}. {note}
            &nbsp;<span onClick={() => dispatch(deleteNote(i))}>X</span>

        </div>
        )
    })
    return (
        <div>
            {notes}

            <input value={newNote} onChange={e => saveNewNote(e.target.value)} />
            <div onClick={() => dispatch(addNote(newNote))}>SAVE</div>


        </div>
    )
}