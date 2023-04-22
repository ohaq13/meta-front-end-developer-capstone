import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import { FaRegTimesCircle, FaGripLines } from 'react-icons/fa';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
      <div className="mobile-nav" onClick={toggleNav}>
        {isOpen ? <FaRegTimesCircle /> : <FaGripLines />}
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/menu" className="nav-item">Menu</Link>
        <Link to="/booking" className="nav-item">Reservations</Link>
        <Link to="/orderonline" className="nav-item">Order Online</Link>
        <Link to="/login" className="nav-item">Login</Link>
      </nav>
      </>
    )
  }