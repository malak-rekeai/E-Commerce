import React from "react";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import cart from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Netflix Logo" />
        <p>SHOPPER</p>
        
      </div>
      <ul className="nav_menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li>
          <Link to="/men">men</Link>
        </li>
        <li>
          <Link to="/kids">kids</Link>
        </li>
      </ul>
      <div className="nav-btn">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          {" "}
          <img
            src={cart}
            width={40}
            alt="cart"
          />
        </Link>
        <div className="cart-items">0</div>
      </div>
    </div>
  );
};

export default Navbar;
