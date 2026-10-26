import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import "./ContactCTA.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="contact-cta__box">
          <h2 className="contact-cta__title">Need Help Finding The Perfect Bag?</h2>
          <p className="contact-cta__desc">Our personal fashion consultants are available right now to assist you via WhatsApp or phone call.</p>
          <div className="contact-cta__actions">
            <a href="https://wa.me/2349032856414" target="_blank" rel="noreferrer" className="cta-btn cta-btn--whatsapp">
              <FaWhatsapp className="cta-icon" /> Chat on WhatsApp
            </a>
            <a href="tel:09032856414" className="cta-btn cta-btn--call">
              <FaPhoneAlt className="cta-icon" /> Call 09032856414
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}