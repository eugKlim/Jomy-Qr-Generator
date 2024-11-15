import { QRCodeSVG } from 'qrcode.react';

interface IGenerateQr {
  value: string;
}

const GenerateQr: React.FC<IGenerateQr> = ({ value }) => {
  return (
    <div>
      <div className="bg-teal-300 p-6 inline-block rounded-2xl cursor-none">
        <QRCodeSVG value={value} size={200} />
      </div>
    </div>
  );
};

export default GenerateQr;
