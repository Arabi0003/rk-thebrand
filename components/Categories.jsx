import React from "react";
import "./Categories.css";

const categories = [
  { id: 1, title: "Handbags", img: "/image copy.png" },
  { id: 2, title: "Backpacks", img: "/image copy 2.png" },
  { id: 3, title: "Travel Bags", img: "/image copy 3.png" },
  { id: 4, title: "Accessories", img: "/image copy 4.png" },
];

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <h2 className="section-title">Shop By Category</h2>
        <div className="categories__grid">
          {categories.map((cat) => (
            <div key={cat.id} className="category-card">
              <img src={encodeURI(cat.img)} alt={cat.title} className="category-card__img" />
              <div className="category-card__overlay">
                <h3 className="category-card__title">{cat.title}</h3>
                <span className="category-card__link">Explore Collection &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}