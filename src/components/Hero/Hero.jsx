import React from "react";
import hero from "../../Assets/hero_image.png"
import arrow from "../../Assets/arrow.png"
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New arrival</h2>
        <div>
          <div className="hero-icon">
          </div>
          <p>New collections for everyone</p>
          <div className="hero-button">

            <button>Shop now 
            </button>
            <img src={arrow} />

            </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} />
      </div>
    </div>
  );
};

export default Hero;
