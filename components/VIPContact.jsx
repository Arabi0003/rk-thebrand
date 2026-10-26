import React from "react";
import "./VIPContact.css";

export default function VIPContact() {
  return (
    <section className="vip" id="vip">
      <div className="vip__bg">
        <img src={encodeURI("/image copy 14.png")} alt="VIP Background" />
        <div className="vip__overlay"></div>
      </div>
      <div className="container vip__content">
        <h2 className="vip__title">VIP Concierge</h2>
        <p className="vip__text">Looking for a specific piece? Our style consultants are available to assist you with personalized recommendations.</p>
        <div className="vip__actions">
          <a href="https://wa.me/2349032856414" target="_blank" rel="noreferrer" className="vip__btn vip__btn--primary">Chat on WhatsApp</a>
          <a href="tel:09032856414" className="vip__btn vip__btn--secondary">Call Concierge</a>
        </div>
      </div>
    </section>
  );
}