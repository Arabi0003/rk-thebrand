"use client";
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col">
            <div className="footer__brand-header">
              <img src="/image.png" alt="RK Logo" className="footer__logo" />
              <h3 className="footer__brand-title">RK THE BRAND</h3>
            </div>
            <p className="footer__desc">Your premier destination for luxury bags, backpacks, and fashion accessories in Abuja, Nigeria.</p>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#home">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#products">Featured Shop</a></li>
              <li><a href="#new-arrivals">New Arrivals</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__title">Business Information</h4>
            <ul className="footer__info">
              <li><strong>Address:</strong> Jikwoyi, Abuja, Nigeria</li>
              <li><strong>Phone:</strong> 09032856414</li>
              <li><strong>Email:</strong> rkthebrand16@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; 2025 RK THE BRAND. All Rights Reserved.</p>
          <p className="footer__credit">
            Powered By Yalerima Technologies Limited <a href="https://www.yalerima.com.ng" target="_blank" rel="noreferrer">www.yalerima.com.ng</a>
          </p>
        </div>
      </div>
    </footer>
  );
}