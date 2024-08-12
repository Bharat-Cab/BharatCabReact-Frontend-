import React from 'react';
import './NavBar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">BharatCab</div>
      <ul className="nav-links">
        {/* <li><a href="#">Search</a></li>
        <li><a href="#">Publish a ride</a></li>
        <li><a href="#">Profile</a></li> */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search"> Search</Link></li>
        <li><Link to="/publishride"> Publish a ride</Link></li>
        <li><Link to="/profile"> Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;