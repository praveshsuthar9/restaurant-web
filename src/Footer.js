import "./App.css";
import './Media.css';
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-icon">
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-pinterest"></i>
            </a>
          </div>
          <div className="footer-btn">
            <button>Home</button>
            <button>About</button>
            <button>Menu</button>
            <button>Products</button>
            <button>Review</button>
            <button>Contact</button>
            <button>Blogs</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
