import './scss/style.scss';
import { Suspense, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getQrHistoryStorage } from './components/QrSlice';

import Footer from './components/Footer.tsx';
import Header from './components/Header.tsx';
import ScrollToTop from './Utils/ScrollToTop.tsx';

import HomePage from './pages/HomePage.tsx';
import AllQrPage from './pages/AllQrPage.tsx';
import GetQrPage from './pages/GetQrPage.tsx';
import ErrorPage from './pages/ErrorPage.tsx';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQrHistoryStorage());
  }, []);

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RalewayRegular bg-homeBg">
      <Router>
        <ScrollToTop />
        <Header />
        <Suspense
          fallback={
            <div className="loading-gif">
              <img src="image/loading.gif" alt="Loading..." />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/allSaveQr" element={<AllQrPage />} />
            <Route path="/getQr" element={<GetQrPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>

          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
