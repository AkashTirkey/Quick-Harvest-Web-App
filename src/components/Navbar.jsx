import React from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = ({ cartCount, setShowCart }) => {
  return (
    <nav className="navbar">

      {/* LOGO */}

      <div className="logo">
        <img
          src={logo}
          alt="Fresh Harvest Logo"
        />
      </div>

      {/* SEARCH */}

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search groceries..."
        />

      </div>

      {/* CART */}

      <div
        className="cart-container"
        onClick={() => setShowCart(true)}
      >

        <div className="cart-icon">

          <FaShoppingCart />

          <span>
            {cartCount}
          </span>

        </div>

        <p>Cart</p>

      </div>

    </nav>
  );
};

export default Navbar;