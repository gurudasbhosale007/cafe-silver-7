import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        Cafe <span>Silver 7</span>
      </div>

      {/* Hamburger / Close Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Menu
        </NavLink>
        <NavLink
          to="/location"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Location
        </NavLink>
        <NavLink
          to="/reservation"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Reservation
        </NavLink>
        <NavLink
          to="/review"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={closeMenu}
        >
          Review
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
