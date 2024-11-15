import { useRef, useEffect, useState } from 'react';
import GenerateQr from '../components/GenerateQr.tsx';
import { DownloadImage } from '../Utils/DownloadImage.tsx';
import { useSelector, useDispatch } from 'react-redux';
import {
  getQrHistoryStorage,
  deleteQrFromStorage,
} from '../components/QrSlice.tsx';
import { AppDispatch, RootState } from '../components/Store.tsx';

import ButtonComponent1 from '../components/button-components/ButtonComponent1.js';
import ButtonComponent2 from '../components/button-components/ButtonComponent2.js';

const AllQrPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

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

  // getQr from localStorage
  const dispatch = useDispatch<AppDispatch>();
  const { qrHistoryStorage } = useSelector((state: RootState) => state.qrSlice);

  useEffect(() => {
    dispatch(getQrHistoryStorage());
  }, [dispatch]);
  // /

  function deleteQr(item: string) {
    dispatch(deleteQrFromStorage(item));
    dispatch(getQrHistoryStorage());
  }

  return (
    <div className="bg-dark pt-20 md:px-20 pb-40">
      {isLoading ? (
        <div></div>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-20 justify-items-center">
          {qrHistoryStorage.length !== 0 ? (
            [...qrHistoryStorage].reverse().map((item, index) => (
              <div
                className="inline-block p-4 rounded-2xl w-96 bgGradient"
                key={index}
              >
                <div ref={qrRef}>
                  <GenerateQr value={item} />
                </div>

                <h2 className="font-bold whitespace-nowrap overflow-hidden text-ellipsis my-8 text-left uppercase text-gray-400">
                  Ссылка:{' '}
                  <span className="italic font-normal normal-case text-white">
                    {item}
                  </span>
                </h2>

                <div className="flex flex-col space-y-5">
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

                  <div className="pt-8">
                    <ButtonComponent2 event={() => deleteQr(item)}>
                      DELETE
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
                        className="ml-6"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </ButtonComponent2>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-xl text-rose-500 uppercase">
              Нет сгенерированных Qr
            </h2>
          )}
        </div>
      )}
    </div>
  );
};

export default AllQrPage;
