"use client";
import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={encodeURI("/image copy 13.png")}
        >
          <source src="/brand.mp4" type="video/mp4" />
        </video>
        <div className="hero__bg-overlay" />
      </div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero__badge">Premium Collection 2025</span>

          <h1 className="hero__title">
            <span className="hero__title-line">Elevate</span>
            <span className="hero__title-line hero__title-line--accent">Your Style</span>
          </h1>

          <p className="hero__subtitle">
            Discover our curated collection of luxury bags and fashion accessories.
            Crafted for those who demand excellence in every detail.
          </p>

          <div className="hero__actions">
            <a href="#products" className="hero__btn hero__btn--primary">Shop Collection</a>
            <a href="#new-arrivals" className="hero__btn hero__btn--secondary">New Arrivals</a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Happy Customers</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">200+</span>
              <span className="hero__stat-label">Premium Products</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="hero__image-card">
            <img
              src={encodeURI("/image copy 14.png")}
              alt="RK THE BRAND Luxury Bag"
              className="hero__featured-image"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}