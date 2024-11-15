import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IQrSlice {
  inputValue: string;
  qrHistoryStorage: string[];
  qrHistoryCounter: number;
}

const QrSlice = createSlice({
  name: 'qrSlice',
  initialState: {
    inputValue: '',
    qrHistoryStorage: [],
    qrHistoryCounter: 0,
  } as IQrSlice,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },

    getQrHistoryStorage: (state) => {
      const getQrStorage = localStorage.getItem('qrStorage');
      const haveQrStorage = getQrStorage ? JSON.parse(getQrStorage) : [];

      state.qrHistoryStorage = haveQrStorage;
      state.qrHistoryCounter = haveQrStorage.length;
    },

    setNewQrInStorage: (state, action: PayloadAction<string>) => {
      const getQrStorage = localStorage.getItem('qrStorage');
      const haveQrStorage = getQrStorage ? JSON.parse(getQrStorage) : [];

      if (haveQrStorage.includes(state.inputValue)) return;
      const updateHistoryStorage = [...haveQrStorage, action.payload];
      localStorage.setItem('qrStorage', JSON.stringify(updateHistoryStorage));
      state.qrHistoryCounter = haveQrStorage.length + 1;
    },

    deleteQrFromStorage: (state, action: PayloadAction<string>) => {
      const getQrStorage = localStorage.getItem('qrStorage');
      const haveQrStorage = getQrStorage ? JSON.parse(getQrStorage) : [];
      const updateQrStorage = haveQrStorage.filter(
        (item: string) => item !== action.payload
      );
      localStorage.setItem('qrStorage', JSON.stringify(updateQrStorage));

      state.qrHistoryStorage = updateQrStorage;
      state.qrHistoryCounter = updateQrStorage.length;
    },
  },
});

export const {
  setInputValue,
  getQrHistoryStorage,
  setNewQrInStorage,
  deleteQrFromStorage,
} = QrSlice.actions;
export default QrSlice.reducer;
