import React from "react";
import "./WhyChooseUs.css";

const features = [
  { id: 1, title: "Premium Quality", desc: "Expert craftsmanship and finest materials guaranteed.", icon: "💎" },
  { id: 2, title: "Fast Delivery", desc: "Express shipping nationwide across Abuja & Nigeria.", icon: "🚚" },
  { id: 3, title: "100% Authentic", desc: "Guaranteed genuine luxury items direct from design.", icon: "🛡️" },
  { id: 4, title: "Easy Returns", desc: "Hassle-free return policy for ultimate peace of mind.", icon: "🔄" },
];

export default function WhyChooseUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose RK THE BRAND</h2>
        <div className="why-us__grid">
          {features.map((feat) => (
            <div key={feat.id} className="why-us__card">
              <div className="why-us__icon">{feat.icon}</div>
              <h3 className="why-us__title">{feat.title}</h3>
              <p className="why-us__desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}