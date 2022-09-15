import { NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";

const Navbar = () => (
  <header>
    <nav className="navbar">
      <h1>BOOKSTORE</h1>

      <ul className="list">
        <li>
          <NavLink to="/book">Book</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
