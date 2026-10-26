import React from "react";
import "./BentoCategories.css";

export default function BentoCategories() {
  return (
    <section className="section-padding bento" id="collections">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">The Collections</span>
          <h2 className="section-title">Curated For You</h2>
        </div>
        
        <div className="bento__grid">
          <div className="bento__item bento__item--large">
            <img src={encodeURI("/image copy.png")} alt="Handbags" />
            <div className="bento__content">
              <h3>Handbags</h3>
              <a href="#signature">Shop Now &rarr;</a>
            </div>
          </div>
          <div className="bento__item">
            <img src={encodeURI("/image copy 2.png")} alt="Backpacks" />
            <div className="bento__content">
              <h3>Backpacks</h3>
              <a href="#signature">Shop Now &rarr;</a>
            </div>
          </div>
          <div className="bento__item">
            <img src={encodeURI("/image copy 3.png")} alt="Travel Bags" />
            <div className="bento__content">
              <h3>Travel Bags</h3>
              <a href="#signature">Shop Now &rarr;</a>
            </div>
          </div>
          <div className="bento__item bento__item--wide">
            <img src={encodeURI("/image copy 4.png")} alt="Accessories" />
            <div className="bento__content">
              <h3>Accessories</h3>
              <a href="#signature">Shop Now &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}