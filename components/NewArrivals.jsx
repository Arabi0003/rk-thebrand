import React from "react";
import "./Products.css";

const arrivals = [
  { id: 1, title: "Signature Mini Bag", price: "22,000", img: "/image copy 9.png" },
  { id: 2, title: "Urban Sling Pack", price: "18,500", img: "/image copy 10.png" },
  { id: 3, title: "Weekend Holdall", price: "55,000", img: "/image copy 11.png" },
  { id: 4, title: "Designer Clutch", price: "30,000", img: "/image copy 12.png" },
];

export default function NewArrivals() {
  return (
    <section className="products-section products-section--alt" id="new-arrivals">
      <div className="container">
        <h2 className="section-title">New Arrivals</h2>
        <div className="products-grid">
          {arrivals.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="product-card__img-wrapper">
                <span className="product-badge" style={{ backgroundColor: "var(--brand-blue)" }}>New</span>
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