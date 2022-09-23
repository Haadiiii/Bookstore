import { NavLink } from "react-router-dom";
import React from "react";
import "../assets/Styles/navbar.css";

const Navbar = () => (
  <header>
    <nav className="navbar">
      <h1>BOOKSTORE CMS</h1>

      <ul className="list">
        <li>
          <NavLink to="/">Book</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
      <div className="image">
        <img
          src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-User-users-those-icons-flat-those-icons-4.png"
          alt=""
        />
      </div>
    </nav>
  </header>
);

export default Navbar;
