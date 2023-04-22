import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import UnderConstruction from './pages/UnderConstruction';
import Booking  from './pages/Booking';
import BookingConfirmed from './pages/BookingConfirmed';
import Alert from "./components/Alert";
import { ChakraProvider } from "@chakra-ui/react";
import { AlertProvider } from "./context/alertContext";
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <>
    <ChakraProvider>
      <AlertProvider>
        <BrowserRouter>
          <Header />
          <Routes> 
            <Route path="/" exact element={<Home />} />
            <Route path={"/about"} element={<UnderConstruction/>} />
            <Route path={"/menu"} element={<UnderConstruction />} />
            <Route path="/booking" element={<Booking />} />
            <Route path={"/orderonline"} element={<UnderConstruction />} />
            <Route path={"/login"} element={<UnderConstruction />} />
            <Route path={"/booking-confirmed"} element={<BookingConfirmed />} />
            </Routes>
          <Footer />
          <Alert />
        </BrowserRouter>
      </AlertProvider>
    </ChakraProvider>
    </>
  );
}

export default App;
