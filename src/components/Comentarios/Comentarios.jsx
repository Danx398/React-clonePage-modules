import React from 'react'
import {FaCommentDots} from "react-icons/fa6"
export const Comentarios = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h5 className='text-secondary'><FaCommentDots style={{color: "rgb(255, 125, 18)"}}/>Comentarios:</h5>
            </div>
            <div className="row">
                <button className='btn container-fluid mb-3 text-light' style={{background: "rgb(255, 125, 18)", }}>Mostrar Comentarios</button>
            </div>
            
        </div>
    </div>
  )
}
