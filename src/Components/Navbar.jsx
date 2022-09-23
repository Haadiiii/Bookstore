import { NavLink } from "react-router-dom";
import React from "react";
import "../assets/Styles/navbar.css";

const Navbar = () => (
  <header>
    <nav className="navbar">
      <h1>BOOKSTORE</h1>

      <ul className="list">
        <li>
          <NavLink to="/">Book</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
