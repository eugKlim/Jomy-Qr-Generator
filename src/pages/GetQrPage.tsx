import { useEffect, useRef } from 'react';
import GenerateQr from '../components/GenerateQr';
import { useNavigate } from 'react-router-dom';
import { DownloadImage } from '../Utils/DownloadImage.tsx';
import ButtonComponent1 from '../components/button-components/ButtonComponent1.tsx';
import { useDispatch } from 'react-redux';
import { setNewQrInStorage, setInputValue } from '../components/QrSlice';
import { AppDispatch } from '../components/Store';

const GetQrPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const getUserText: string = sessionStorage.getItem('textInput') ?? '';

  useEffect(() => {
    dispatch(setInputValue(getUserText));
    dispatch(setNewQrInStorage(getUserText));
  });

  // for download qr
  const qrRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadImage = (format: 'svg' | 'png') => {
    if (qrRef.current) {
      const svgElement = qrRef.current.querySelector('svg');
      if (svgElement) {
        DownloadImage(svgElement, format);
      }
    }
  };
  // /

  return (
    <div className="bg-dark centerBlock py-20">
      <div className="bg-purple-900 sm:p-3 md:p-9 rounded-2xl sm:w-full md:w-[400px]">
        {getUserText != null && getUserText.length != 0 ? (
          <div ref={qrRef}>
            <GenerateQr value={getUserText} />
          </div>
        ) : (
          <img
            src="image/noQr.gif"
            alt="No qr code"
            className="mx-auto rounded-3xl"
          />
        )}

        <div className="mt-6 mb-10">
          <div>
            {getUserText != null && getUserText.length != 0 ? (
              <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                Ваша ссылка:
                <span className="italic font-normal"> {getUserText}</span>
              </h2>
            ) : (
              <p className="font-bold">Сгенерируйте qr code</p>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-5">
          {getUserText.length === 0 || getUserText === null ? (
            <ButtonComponent1
              event={() => {
                navigate('/home');
                dispatch(setInputValue(''));
              }}
              startColor=""
              endColor=""
            >
              Сгенерировать qr code
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
              >
                <path d="m6 17 5-5-5-5" />
                <path d="m13 17 5-5-5-5" />
              </svg>
            </ButtonComponent1>
          ) : (
            ''
          )}

          {getUserText != null && getUserText.length != 0 ? (
            <>
              <ButtonComponent1
                event={() => {
                  navigate('/home');
                  dispatch(setInputValue(''));
                }}
                startColor=""
                endColor=""
              >
                Сгенерировать еще
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
                >
                  <path d="m6 17 5-5-5-5" />
                  <path d="m13 17 5-5-5-5" />
                </svg>
              </ButtonComponent1>
              <ButtonComponent1
                event={() => handleDownloadImage('png')}
                startColor={'rgba(0, 206, 209, 0.7)'}
                endColor={'rgba(255, 165, 0, 0.3)'}
              >
                Download PNG
                <span className="p-3 rounded-full bg-rose-900 shadow-custom2">
                  <img src="image/png-icon.svg" alt="png ico" />
                </span>
              </ButtonComponent1>
              <ButtonComponent1
                event={() => handleDownloadImage('svg')}
                startColor={'rgba(255, 0, 255, 0.7)'}
                endColor={'rgba(255, 165, 0, 0.3)'}
              >
                Download SVG
                <span className="p-3 rounded-full bg-white shadow-custom2">
                  <img src="image/svg-icon.svg" alt="svg ico" />
                </span>
              </ButtonComponent1>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default GetQrPage;
