import React from "react";
import "./CardUltimas.css";
export const CardUltimas = ({ imageUrl, title }) => {
  return (
    <div className="My-swiper mb-5">
      <div className="My-swiper-slide">
      <div className="my-swiper-slideUltimas">
        <div className="slide-containerUltimas">
          <div className="top-leftUltimas">Emisión</div>
          <div className="top-rightUltimas">2023</div>
          <div className="top-centerUltimas">TV</div>
          <img src={imageUrl} alt="" className="my-slide-imageUltimas" />
          <div className="title-containerUltimas">
            <div className="titleUltimas">{title}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
