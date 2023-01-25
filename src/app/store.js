import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import downloadReducer from '../features/downloader/downloadSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    download: downloadReducer
  },
});
