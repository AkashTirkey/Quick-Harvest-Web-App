import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="fresh Harvest logo" />
      </div>
      <div className="search-box">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search groceries...." />
      </div>

      <div className="cart-container">
        <div className="cart-icon">
          <FaShoppingCart />
          <span>{cartCount}</span>
        </div>
        <p>Cart</p>
      </div>
    </nav>
  );
};

export default Navbar;
