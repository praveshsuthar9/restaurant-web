import "./App.js";
import './Media.css';
import React from "react";
import { review } from "./Data";

function Review() {
  return (
    <div>
      <section id="review">
        <div className="container">
          <div className="review-container">
            <h3>
              CUSTMORE'S <span>REVIEW</span>
            </h3>
            <div className="review">
              {review.map((item) => {
                return (
                  <div className="review-in">
                    <span className="qoute">
                      <i class="fa-solid fa-quote-right"></i>
                    </span>
                    <p>
                      Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                      Animi Nulla Sit Libero Nemo Fuga Sequi Nobis?
                      Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium
                      Consequuntur Iste Ex Aliquam Minus Vel? Nemo.
                    </p>
                    <img src={item.img} alt="revidew-img" />
                    <h4>Jon</h4>
                    <div className="p-star">
                      <span>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star-half-stroke"></i>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
