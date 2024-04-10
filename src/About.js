import "./App.css";
import './Media.css';

import React from "react";
import about from "./images/about-img.avif"

function About() {
  return (
    <div>
  <section id="about">
    <div className="container">
      <h3><span>ABOUT</span> US</h3>
      <div className="about-container">
<div className="about-img">
  <img src={about} alt="about-img" />
</div>
<div className="about-content">
  <h4>What Makes Our Food Special?</h4>
  <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Voluptatibus Qui Ea Ullam, Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?</p>
  <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque Consectetur Obcaecati Sapiente?</p>
  <div className="about-btn">
    <button>Learn More</button>
  </div>
</div>
      </div>
    </div>
  </section>
     
    </div>
  );
}

export default About;
