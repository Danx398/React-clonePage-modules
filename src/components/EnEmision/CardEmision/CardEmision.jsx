import React from 'react'
import '../stylesA.css'
export const CardEmision = ({imageUrl,title,textoOculto}) => {
  return (
    <div className="My-swiperE mb-5">
      <div className="My-swiper-slideE">
      <div className="my-swiper-slideEmision">
        <div className="slide-containerEmision">
          <div className="top-leftEmision">Emisión</div>
          <div className="top-rightEmision">2023</div>
          <div className="top-centerEmision">TV</div>
          <img src={imageUrl} alt="" className="my-slide-imageEmision" />
          <div className="title-containerEmision">
            <div className="titleEmision">{title}</div>
          </div>
          <div className="texto-oculto">
            {textoOculto}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
