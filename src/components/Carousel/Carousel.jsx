import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import { FreeMode, Autoplay, Navigation } from "swiper/modules";
import {FaFireFlameCurved} from "react-icons/fa6";

export const Carousel = () => {
  const images = [
    {
      key: "1",
      src: "/images/carouselAnimesPopulares/anime1.jpg",
      title: "Seiken Gakuin no Makentsukai",
    },
    {
      key: "2",
      src: "/images/carouselAnimesPopulares/anime2.jpg",
      title: "Undead Unluck",
    },
    {
      key: "3",
      src: "/images/carouselAnimesPopulares/anime3.jpg",
      title:
        "Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi.",
    },
    {
      key: "4",
      src: "/images/carouselAnimesPopulares/anime4.jpg",
      title: "Tokyo Revengers: Tenjiku-hen",
    },
    {
      key: "5",
      src: "/images/carouselAnimesPopulares/anime5.jpg",
      title: "Kage no Jitsuryokusha ni Naritakute! 2nd Season",
    },
    {
      key: "6",
      src: "/images/carouselAnimesPopulares/anime6.jpg",
      title: "SPY x FAMILY Season 2",
    },
    {
      key: "7",
      src: "/images/carouselAnimesPopulares/anime7.jpg",
      title: "Goblin Slayer II",
    },
    {
      key: "8",
      src: "/images/carouselAnimesPopulares/anime8.jpg",
      title: "Tate no Yuusha no Nariagari Season 3",
    },
    {
      key: "9",
      src: "/images/carouselAnimesPopulares/anime9.jpg",
      title: "Kanojo mo Kanojo Season 2",
    },
    {
      key: "10",
      src: "/images/carouselAnimesPopulares/anime10.jpg",
      title: "Bleach: Sennen Kessen-hen - Ketsubetsu-tan -",
    },
    {
      key: "11",
      src: "/images/carouselAnimesPopulares/anime11.jpg",
      title: "Helck",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-secondary"><FaFireFlameCurved style={{color: "rgb(255, 125, 18)",}} />Animes Populares</h5>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <Swiper
              slidesPerView={5}
              spaceBetween={6}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[FreeMode, Autoplay, Navigation]}
              className="mySwiper"
            >
              {images.map((image) => (
                <SwiperSlide key={image.key} className="my-swiper-slide">
                  <div className="slide-container">
                    <div className="top-left">Emisión</div>
                    <div className="top-right">2023</div>
                    <div className="top-center">TV</div>
                    <img src={image.src} alt="" className="my-slide-image" />
                    <div className="title-container">
                      <div className="title">{image.title}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};
