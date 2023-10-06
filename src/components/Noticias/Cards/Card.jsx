import React from "react";
import "./Cards.css";
export const Card = ({ imageUrl, title }) => {
  return (
    <div className="rectangle-card">
      <img src={imageUrl} alt="Imagen" className="card-image" />
      <div className="title-containerCard">
        <div className="titleCard">{title}</div>
      </div>
    </div>
  );
};
