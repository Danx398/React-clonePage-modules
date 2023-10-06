import React from "react";
import { CardUltimas } from "./CardUltimas";
import { FaStar } from "react-icons/fa6";
export const UltimasSeries = () => {
  const imagenesUltimas = [
    {imageUrl:"./images/UltimasSeries/anime1.jpg",title:"Kyoukai Senki: Kyokko no Souki"},{
      imageUrl:"./images/UltimasSeries/anime2.jpg",title:"Tian Guan Ci Fu 2nd Season"
    },{
      imageUrl:"./images/UltimasSeries/anime3.jpg",title:"Sasaki to Miyano Movie: Sotsugyou-hen"
    },{
      imageUrl:"./images/UltimasSeries/anime4.jpg",title:"Tensei Shitara Slime Datta Ken: Coleus no Yume"
    },{
      imageUrl:"./images/UltimasSeries/anime5.jpg",title:"PLUTO"
    },{
      imageUrl:"./images/UltimasSeries/anime6.jpg",title:"Dr. STONE Season 3 2 Cour"
    },{
      imageUrl:"./images/UltimasSeries/anime7.jpg",title:"Good Night World"
    },{
      imageUrl:"./images/UltimasSeries/anime8.jpg",title:"Houkago Shounen Hanako-kun"
    },{
      imageUrl:"./images/UltimasSeries/anime9.jpg",title:"Dead Mount Death Play 2nd Cour"
    },{
      imageUrl:"./images/UltimasSeries/anime10.jpg",title:"Hoshikuzu Telepath"
    },{
      imageUrl:"./images/UltimasSeries/anime11.jpg",title:"Kimi no Koto ga Daidaidaidaidaisuki na 100-nin no Kanojo"
    },{
      imageUrl:"./images/UltimasSeries/anime12.jpg",title:"Mokushiroku no Yonkishi"
    }
  ]
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-secondary mt-3">
              <FaStar style={{ color: "rgb(255, 125, 18)" }} />
              Ultimas Series Agregadas
            </h5>
          </div>
        </div>
        <div className="row row-cols-4">
         {imagenesUltimas.map((imagesU)=>(
          <CardUltimas imageUrl={imagesU.imageUrl} title={imagesU.title}/>
         ))}
        </div>
      </div>
    </>
  );
};
