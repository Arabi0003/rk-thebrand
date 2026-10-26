import React from "react";
import "./Marquee.css";

export default function Marquee() {
  const text = "LUXURY FASHION • PREMIUM BAGS • 100% AUTHENTIC • NATIONWIDE DELIVERY • ";
  return (
    <div className="marquee">
      <div className="marquee__track">
        <span className="marquee__text">{text.repeat(5)}</span>
      </div>
    </div>
  );
}