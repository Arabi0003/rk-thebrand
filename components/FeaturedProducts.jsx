import React from "react";
import "./Products.css";

const featured = [
  { id: 1, title: "Classic Leather Tote", price: "45,000", img: "/image copy 5.png" },
  { id: 2, title: "Executive Backpack", price: "38,500", img: "/image copy 6.png" },
  { id: 3, title: "Luxury Crossbody Bag", price: "25,000", img: "/image copy 7.png" },
  { id: 4, title: "Premium Travel Duffle", price: "60,000", img: "/image copy 8.png" },
];

export default function FeaturedProducts() {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <h2 className="section-title">Featured Collection</h2>
        <div className="products-grid">
          {featured.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="product-card__img-wrapper">
                <span className="product-badge">Top Seller</span>
                <img src={encodeURI(prod.img)} alt={prod.title} className="product-card__img" />
              </div>
              <div className="product-card__content">
                <h3 className="product-card__title">{prod.title}</h3>
                <div className="product-card__price">{"\u20A6"}{prod.price}</div>
                <button className="product-card__btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}