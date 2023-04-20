import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UnderConstruction from './pages/UnderConstruction';
import Booking  from './pages/UnderConstruction';

import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Header />
     <Routes> 
     <Route path="/" exact element={<Home />} />
     <Route path={"/about"} element={<UnderConstruction/>} />
      <Route path={"/menu"} element={<UnderConstruction />} />
      <Route path="/booking" element={<Booking />} />
      <Route path={"/orderonline"} element={<UnderConstruction />} />
      <Route path={"/login"} element={<UnderConstruction />} />
    </Routes>
     <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
