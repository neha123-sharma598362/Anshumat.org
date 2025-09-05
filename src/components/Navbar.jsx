import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Anshumat.org</h1>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </button>

      {/* Links */}
      <ul className={showMenu ? "nav-links show" : "nav-links"}>
        <li><a href="#hero" onClick={() => setShowMenu(false)}>Home</a></li>
        <li><a href="#mission" onClick={() => setShowMenu(false)}>Mission</a></li>
        <li><a href="#initiatives" onClick={() => setShowMenu(false)}>Initiatives</a></li>
        <li><a href="#programs" onClick={() => setShowMenu(false)}>Programs</a></li>
        <li><a href="#contact" onClick={() => setShowMenu(false)}>Contact</a></li>
        <li><a href="#register" onClick={() => setShowMenu(false)}>Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
