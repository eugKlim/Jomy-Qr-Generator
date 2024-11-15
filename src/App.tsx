import './scss/style.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import GetQrUrl from './components/GetUrl';
function App() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto] font-RalewayRegular bg-homeBg">
    <Header/>
    <GetQrUrl/>
    <Footer/>
    </div>
  );
}

export default App;
