import React from "react";
import "./offer.css";
import exc from '../../Assets/exclusive_image.png';

export const Offer = () => {
  return (
    <div className="container">
      <div className="offers">
        <div className="offers-left">
          <h1>Offers & Deals</h1>
          <h1>on your favorite products</h1>
          <p>Get the best offers and deals on your favorite products</p>
          <button>Check now</button>
        </div>
        <div className="offers-right">
          <img src={exc} alt="Exclusive offer" />
        </div>
      </div>
    </div>
  );
};
