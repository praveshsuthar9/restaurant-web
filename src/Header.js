import "./App.css";
import './Media.css';
import React from "react";
import logo from "./images/logo.png";
import { useRef } from "react";
import {cart} from "./Data";

function Header() {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();

  const searchH = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove('active');
    navbarRef.current.classList.remove('active');
  };

  const cartToggle = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove('active');
    navbarRef.current.classList.remove('active');
  };

  const dropMenu = () => {
    navbarRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    searchRef.current.classList.remove('active');
  };

  return (
    <div>
      <div className="header">
        <div className="header-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav ref={navbarRef}>
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Home">About</a>
              </li>
              <li>
                <a href="#Home">Menu</a>
              </li>
              <li>
                <a href="#Home">Products</a>
              </li>
              <li>
                <a href="#Home">Review</a>
              </li>
              <li>
                <a href="#Home">Contact</a>
              </li>
              <li>
                <a href="#Home">Blogs</a>
              </li>
            </ul>
          </nav>
          <div className="search">
            <span>
              <i class="fa-solid fa-magnifying-glass" onClick={searchH}></i>
            </span>
            <span>
              <i class="fa-solid fa-cart-shopping " onClick={cartToggle}></i>
            </span>
            <span>
              <i class="fa-solid fa-bars menubar" onClick={dropMenu}></i>
            </span>
          </div>
          <div className="search-form " ref={searchRef}>
            <input type="text" placeholder="Search here..." id="search-box" />
          </div>
          <div className="cart-container " ref={cartRef}>
            {cart.map((item, index) => {
              return (
                <>
                  <div className="cart " key={index}>
                    <img src={item.img} alt="cart" />
                    <p>
                      {item.item} <br /> <span>{item.amount}</span>
                    </p>
                    <span>
                      <i className="fas fa-times"></i>
                    </span>
                  </div>
                </>
              );
            })}
            <div className="check-out-btn">
              <button>Checkout Now</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
