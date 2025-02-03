import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from './QrSlice.tsx';
import { AppDispatch, RootState } from './Store';

const GetQrUrl = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { inputValue } = useSelector((state: RootState) => state.qrSlice);

  useEffect(() => {
    sessionStorage.setItem('textInput', inputValue);
  }, [inputValue]);

  return (
    <div className="min-w-80 xl:w-2/5 md:w-4/5 sm:w-full min-h-96 bg-orange-500 text-center relative left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 centerBlock rounded-3xl bgGradient">
      <div className="w-full">
        <div className="mb-7 px-8">
          <h1 className="font-bold text-2xl">Генератор QR-кодов онлайн</h1>
          <p className="mt-2 text-md leading-6">
            Введите текст, ссылку, номер телефона или Wi-Fi данные и нажмите
            «Сгенерировать qr». Готовый QR-код можно скачать в PNG или SVG.
          </p>
        </div>

        <input
          type="text"
          onChange={(e) => dispatch(setInputValue(e.target.value))}
          value={inputValue}
          className="p-5 rounded-xl w-4/5 mb-4 shadow-custom bg-white text-black text-xl"
          placeholder="URL"
        />

        {inputValue.length !== 0 ? (
          <button
            className="bg-green-700 uppercase flex items-center py-5 px-14 font-bold rounded-xl m-auto shadow-custom hover:bg-green-900 group"
            onClick={() => navigate('/getQr')}
          >
            Сгенерировать QR
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-4 group-hover:text-emerald-400 group-hover:translate-x-4 transition-all"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        ) : (
          <button
            className="bg-rose-600 opacity-45  cursor-not-allowed uppercase flex items-center py-5 px-14 font-bold rounded-xl m-auto shadow-custom"
            disabled
          >
            Введите url{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-4"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default GetQrUrl;
