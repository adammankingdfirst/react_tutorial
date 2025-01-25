import React from "react";
import logo from "./logo.svg";
import './Header.css';

function Header() {
  return (
    <header>
      <a href="#">
        <img src={logo} width='50' />
      </a>
      <div className="header-right">
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
          <li>Help</li>
        </ul>
        <button className="cart-btn" type="button">Your Cart</button>
      </div>
    </header>
  );
}

export default Header;
