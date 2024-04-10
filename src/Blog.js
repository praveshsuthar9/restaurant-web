import "./App.css";
import './Media.css';
import { blog } from "./Data";

import React from "react";

function Blog() {
  return (
    <div>
      <section id="blog">
        <div className="container">
          <h3>
            OUR <span>BLOGS</span>
          </h3>
          <div className="blog-container">
            {blog.map((item) => {
              return (
                <div className="blog">
                  <img src={item.img} alt="blog-img" />
                  <div className="blog-content">
                    <h4>Tasty And Refreshing Spices</h4>
                    <p>
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                      Non, Dicta.
                    </p>
                    <div className="blog-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
