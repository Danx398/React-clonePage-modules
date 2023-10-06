import React from "react";
import "../stylesA.css";
import { FaSearchengin } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa6";
export const BuscadorAvanzado = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2 className="" style={{ color: "rgb(255, 125, 18)" }}>
            <FaSearchengin className="text-light" />
            Buscados Avanzado
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="contenedor-botones">
            <div class="boton-select">
              <select class="select-personalizado">
                <option>
                  <b>Genero: Todos</b>
                </option>
              </select>
              <FaAngleDown className="icon" />
            </div>
            <div class="boton-select">
              <select class="select-personalizado">
                <option>
                  <b>Año: Todos</b>
                </option>
              </select>
              <FaAngleDown className="icon" />
            </div>
            <div class="boton-select">
              <select class="select-personalizado">
                <option>
                  <b>Tipo: Todos</b>
                </option>
              </select>
              <FaAngleDown className="icon" />
            </div>
            <div class="boton-select">
              <select class="select-personalizado">
                <option>
                  <b>Estado: Emisión</b>
                </option>
              </select>
              <FaAngleDown className="icon" />
            </div>
            <div class="boton-select">
              <select class="select-personalizado">
                <option>
                  <b>Orden: Por defecto</b>
                </option>
              </select>
              <FaAngleDown className="icon" />
            </div>
            <div class="boton-select" style={{background: "rgb(255, 125, 18)",}}>
            <span class="select-personalizado text-light">
                <FaFilter/>
                  Filtrar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
