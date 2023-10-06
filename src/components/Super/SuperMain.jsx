import React from "react";
import { Botones, Buscador, RainbowText } from "../Nav";
import { Link } from "react-router-dom";

export const SuperMain = ({ children }) => {
  return (
    <>
      <style>a{}</style>
      <nav className="navbar navbar-expand-lg navbar-light text-light">
        <div className="container-fluid">
          <div className="navbar-brand" href="#">
            <img
              src="https://animefenix.tv/themes/animefenix-frans185/images/AveFenix.png"
              alt=""
              width={112}
              height={28}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mt-2">
                <Link
                  className="fs-5 nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  className="fs-5 nav-link active text-light"
                  aria-current="page"
                  to="/animes"
                >
                  Animes
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  className="fs-5 nav-link active text-light"
                  aria-current="page"
                  to="/emision"
                >
                  En Emision
                </Link>
              </li>
              <li className="nav-item">
                <RainbowText />
              </li>
              <li></li>
              <li> </li>
            </ul>
            <Botones />
            <Buscador />
          </div>
        </div>
      </nav>
      {children}
      <div className="footerPage mt-3 gap-5">
        <h5 className="fs-5 text-center letras-Peque text-light">
          Ningun vídeo se encuentra alojado en nuestros servidores.
        </h5>
        <h5 className="text-center letrasMasPeque text-light">Desarrollado
          por frans185 Modificado y adaptado por Niko_</h5>
      </div>
    </>
  );
};
