import React from 'react'
import './CardsRecientes.css'

import {FaCirclePlay} from "react-icons/fa6";
export const CardRecientes = ({ imageUrl, title,subtitle }) => {
  return (
    <div className="rectangle-cardRecientes mb-5">
      <div className="play-icon">
        <FaCirclePlay/>
      </div>
    <img src={imageUrl} alt="Imagen" className="card-imageRecientes" />
      <div className="titleCardRecientes">{title}</div>
      <div className="subtitleCardRecientes">{subtitle}</div>
  </div>
  )
}
