import React from "react";

export const Paginador = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <ul className="pagination">
            <li>
              <a href="#" className="text-light">Anterior</a>
            </li>
            <li>
              <a href="#" className="active text-light">1</a>
            </li>
            <li>
              <a href="#" className="text-light">
                2
              </a>
            </li>
            <li>
              <a href="#" className="text-light">3</a>
            </li>
            <li>
              <a href="#" className="text-light">4</a>
            </li>
            <li>
              <a href="#" className="text-light">5</a>
            </li>
            <li>
              <a href="#" className="text-light">6</a>
            </li>
            <li>
              <a href="#" className="text-light">7</a>
            </li>
            <li>
              <a href="#" className="text-light">Siguiente</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
