import { createSlice } from '@reduxjs/toolkit';

export const noterSlice = createSlice({
    name: 'noter',
    initialState: ["NOTES do go here"],

    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
        },
        deleteNote: (state, action) => {
            state.splice(action.payload, 1)
        }
    }

})

export const { addNote, deleteNote } = noterSlice.actions;

export const selectNotes = state => state.noter;

export default noterSlice.reducer;