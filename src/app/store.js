import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { noterSlice } from '../features/noter/noterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    noter: noterSlice.reducer
  },
});
