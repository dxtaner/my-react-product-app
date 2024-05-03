// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/products"> Product Catalog</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/about">About Page</Link>
          </li>
          <li>
            <Link to="/productsTable">Product List</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
