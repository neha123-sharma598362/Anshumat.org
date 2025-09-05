import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Anshumat Foundation | All Rights Reserved</p>
      <div className="socials">
        <NavLink href="#">Facebook</NavLink>
        <NavLink href="#">LinkedIn</NavLink>
        <NavLink href="#">Twitter</NavLink>
      </div>
    </footer>
  );
};

export default Footer;
