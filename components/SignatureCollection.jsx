import React from "react";
import "./SignatureCollection.css";

const products = [
  { id: 1, name: "The Classic Leather Tote", price: "45,000", image: "/image copy 5.png" },
  { id: 2, name: "Executive Monogram Backpack", price: "38,500", image: "/image copy 6.png" },
  { id: 3, name: "Luxe Crossbody Bag", price: "25,000", image: "/image copy 7.png" },
  { id: 4, name: "Signature Travel Duffle", price: "60,000", image: "/image copy 8.png" }
];

export default function SignatureCollection() {
  return (
    <section className="section-padding sig" id="signature">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Exclusive</span>
          <h2 className="section-title">Signature Pieces</h2>
        </div>
        
        <div className="sig__grid">
          {products.map((item) => (
            <div key={item.id} className="sig__card">
              <div className="sig__image-wrap">
                <img src={encodeURI(item.image)} alt={item.name} />
                <button className="sig__add-btn">Add to Bag</button>
              </div>
              <div className="sig__info">
                <h3>{item.name}</h3>
                <p>{"\u20A6"}{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}