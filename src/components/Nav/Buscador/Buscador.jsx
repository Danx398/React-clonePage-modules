import React from "react";
import "./Buscador.css";
import {FaSistrix} from "react-icons/fa6";
export const Buscador = () => {
  return (
    <>
      <form className="d-flex">
        <div className="input-group">
          <input
            type="text"
            className="input is-orange is-rounded text-light"
            placeholder="Busca un anime aqui..."
          />
          <span className="input-group-text button in-orange" id="basic-addon2">
            <FaSistrix/>
          </span>
        </div>
      </form>
    </>
  );
};
