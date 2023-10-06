import React from "react";
import { FaPlay } from "react-icons/fa6";
import { CardRecientes } from "./CardRecientes/CardRecientes";
export const EpisodiosRecientes = () => {
  const img = [
    {
      key:"1",
      src:"./images/Recientes/anime1.jpg",
      title:"B-PROJECT Netsuretu*Love Call",
      subtitle:"Episodio 1"
    },{
      key:"2",
      src:"./images/Recientes/anime2.jpg",
      title:"Tousouchuu: Great Mission",
      subtitle:"Episodio 25"
    },{
      key:"3",
      src:"./images/Recientes/anime3.jpg",
      title:"Toaru Ossan no VRMMO Katsudouki",
      subtitle:"Episodio 1"
    },{
      key:"4",
      src:"./images/Recientes/anime4.jpg",
      title:"Watashi no Oshi wa Akuyaku Reijou",
      subtitle:"Episodio 1"
    },{
      key:"5",
      src:"./images/Recientes/anime5.jpg",
      title:"SHY",
      subtitle:"Episodio 1"
    },{
      key:"6",
      src:"./images/Recientes/anime6.jpg",
      title:"Kamonohashi Ron no Kindan Suiri",
      subtitle:"Episodio 1"
    },{
      key:"7",
      src:"./images/Recientes/anime7.jpg",
      title:"Migi to Dali",
      subtitle:"Episodio 1"
    },{
      key:"8",
      src:"./images/Recientes/anime8.jpg",
      title:"Dark Gathering",
      subtitle:"Episodio 1"
    },{
      key:"9",
      src:"./images/Recientes/anime9.jpg",
      title:"Boushoku no Berserk",
      subtitle:"Episodio 1"
    },{
      key:"10",
      src:"./images/Recientes/anime10.jpg",
      title:"Overtake",
      subtitle:"Episodio 1"
    },{
      key:"11",
      src:"./images/Recientes/anime11.jpg",
      title:"Dekoboko Majo no Oyako Jijou",
      subtitle:"Episodio 1"
    },{
      key:"12",
      src:"./images/Recientes/anime12.jpg",
      title:"Ao no Orchestra",
      subtitle:"Episodio 23"
    },{
      key:"13",
      src:"./images/Recientes/anime13.png",
      title:"One Piece",
      subtitle:"Episodio 1078"
    },{
      key:"14",
      src:"./images/Recientes/anime14.jpg",
      title:"Castlevania: Nocturne",
      subtitle:"Episodio 8"
    },{
      key:"15",
      src:"./images/Recientes/anime15.jpg",
      title:"Jitsu wa Ore, Saikyou deshita?",
      subtitle:"Episodio 1"
    },{
      key:"16",
      src:"./images/Recientes/anime16.jpg",
      title:"Uchi no Kaisha no Chiisai Senpai no Han",
      subtitle:"Episodio 1"
    },{
      key:"17",
      src:"./images/Recientes/anime17.jpg",
      title:"Edens Zero Season 2",
      subtitle:"Episodio 1"
    },{
      key:"18",
      src:"./images/Recientes/anime18.jpg",
      title:"Ragna Crimson",
      subtitle:"Episodio 1"
    },{
      key:"19",
      src:"./images/Recientes/anime19.png",
      title:"Ayakashi Triangle",
      subtitle:"Episodio 1"
    },{
      key:"20",
      src:"./images/Recientes/anime20.jpg",
      title:"Kizuna no Allele 2nd Season",
      subtitle:"Episodio 1"
    }

  ]
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col">
            <h5 className="text-secondary">
              <FaPlay style={{ color: "rgb(255, 125, 18)" }} />
              Episodios Recientes
            </h5>
          </div>
        </div>
        <div className="row row-cols-4">
            {img.map((image)=>(
              // console.log(image.src);
              <CardRecientes key={image.key} imageUrl={image.src} title={image.title} subtitle={image.subtitle}/>
           ))}
        </div>
      </div>
    </>
  );
};
