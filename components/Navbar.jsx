"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <a href="/" className="navbar__brand">
          <img src="/image.png" alt="RK THE BRAND Logo" className="navbar__logo" />
          <div className="navbar__brand-text">
            <span className="navbar__title">RK THE BRAND</span>
            <span className="navbar__tagline">Luxury Fashion</span>
          </div>
        </a>

        <nav className="navbar__desktop">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#products">Shop</a>
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="navbar__actions">
          <button className="icon-btn" aria-label="Search"><FiSearch /></button>
          <button className="icon-btn cart-btn" aria-label="Cart">
            <FiShoppingCart />
            <span className="cart-badge">3</span>
          </button>
          <button className="icon-btn menu-btn" onClick={() => setIsOpen(true)} aria-label="Open Menu">
            <FiMenu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              className="navbar__overlay"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              className="navbar__mobile"
              initial={{ x: "-100%" }} 
              animate={{ x: 0 }} 
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="navbar__mobile-header">
                <div className="navbar__brand">
                  <img src="/image.png" alt="RK Logo" className="navbar__logo" />
                  <span className="navbar__title">RK THE BRAND</span>
                </div>
                <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close Menu"><FiX /></button>
              </div>
              <div className="mobile-links">
                <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
                <a href="#categories" onClick={() => setIsOpen(false)}>Categories</a>
                <a href="#products" onClick={() => setIsOpen(false)}>Featured Shop</a>
                <a href="#new-arrivals" onClick={() => setIsOpen(false)}>New Arrivals</a>
                <a href="#why-us" onClick={() => setIsOpen(false)}>Why Choose Us</a>
                <a href="#contact" onClick={() => setIsOpen(false)}>Contact Us</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}