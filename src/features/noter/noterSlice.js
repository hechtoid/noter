import { createSlice } from '@reduxjs/toolkit';

export const noterSlice = createSlice({
    name: 'noter',
    initialState: ["NOTES do go here"],

    reducers: {
        addNote: (state, action) => {
            state.push(action.payload)
        }
    }

})

export const { addNote } = noterSlice.actions;

export const selectNotes = state => state.noter;

export default noterSlice.reducer;