import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IQrSlice {
  inputValue: string;
  qrHistoryStorage: string[];
}

const QrSlice = createSlice({
  name: 'qrSlice',
  initialState: {
    inputValue: '',
  } as IQrSlice,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const { setInputValue } = QrSlice.actions;
export default QrSlice.reducer;
