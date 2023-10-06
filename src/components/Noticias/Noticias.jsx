import React from "react";
import { FaNewspaper } from "react-icons/fa6";
import { Card } from "./Cards/Card";
import { Hnt } from "./Hnt/Hnt";
export const Noticias = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-secondary">
              <FaNewspaper style={{ color: "rgb(255, 125, 18)" }} />
              Noticias Anime
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex gap-4">
            <Card
              imageUrl="/images/Noticias/anime1.jpg"
              title="Nuevo video promocional para Kasuriya no Hitorigoto"
            />
            <Card
              imageUrl="/images/Noticias/anime2.jpg"
              title="Nuevo vídeo promocional para Tate no Yuusha no Nariagari Season 3"
            />
            <Card
              imageUrl="/images/Noticias/anime3.jpg"
              title="Maou Gakuin no Futekigousha II Part 2 se estrenará en 2024"
            />
            <Card
              imageUrl="/images/Noticias/anime4.jpg"
              title="Vídeo e imagen promocional para BLEACH: Sennen Kessen-hen Soukoku-tan"
            />
          </div>
        </div>
        <div className="container mt-4 ms-5">
          <div className="wor">
            <div className="col">
              <Hnt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
