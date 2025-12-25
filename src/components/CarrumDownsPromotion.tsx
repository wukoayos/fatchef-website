import React from "react";
import "./CarrumDownsPromotion.css";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function CarrumDownsPromotion() {
  useDocumentTitle("Carrum Downs Promotions - FAT CHEF");
  return (
    <div className="promo-root">
      <div className="paper-bg" />
      <div className="promo-container promo-image-container">
        <img
          src="/assets/carrum_promotion.jpeg"
          alt="Carrum Downs promotion"
          className="promo-image"
        />
      </div>
    </div>
  );
}
