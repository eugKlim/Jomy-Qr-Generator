import GetQrUrl from '../components/GetUrl.tsx';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Jomy QR Generator - Быстрое создание QR-кодов онлайн</title>
        <meta
          name="description"
          content="Генерируйте QR-коды бесплатно и без ограничений с Jomy QR Generator. Удобный и быстрый инструмент для создания QR-кодов любых типов: URL, текст, Wi-Fi и другие."
        />
        <meta
          name="keywords"
          content="QR-код, генератор QR-кодов, создать QR-код, QR code generator, бесплатный QR-код, онлайн QR-код, Wi-Fi QR-код, Jomy QR Generator"
        />
        <meta name="author" content="Jomy QR Generator" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="bg-dark">
        <GetQrUrl />
      </div>
    </>
  );
};

export default Home;
