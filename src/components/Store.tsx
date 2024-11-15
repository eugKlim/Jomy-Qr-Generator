import { configureStore } from '@reduxjs/toolkit';
import QrSliceReducer from './QrSlice.tsx';

const Store = configureStore({
  reducer: {
    qrSlice: QrSliceReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
