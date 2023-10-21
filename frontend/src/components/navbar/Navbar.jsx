import React from 'react'
import "./navbar.css"
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  }

  const handleRegister = () => {
    navigate("/register");
  }

  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo">Booking.com</span>
            <div className="navItems">
                <button className="navButton" onClick={handleRegister}>Register</button>
                <button className="navButton" onClick={handleLogin}>Login</button>
            </div>
        </div>
    </div>
  )
}
