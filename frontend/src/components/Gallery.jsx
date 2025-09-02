import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { settings as set } from "../App";
import AOS from "aos";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import images
import Img1 from "/images/galleryImg1.jpg";
import Img2 from "/images/galleryImg2.jpg";
import Img3 from "/images/galleryImg3.jpg";
import Img4 from "/images/galleryImg4.jpg";

import Img5 from "/images/galleryImg5.jpg";
import Img6 from "/images/galleryImg6.jpg";
import Img7 from "/images/galleryImg7.jpg";
import Img8 from "/images/galleryImg8.jpg";
import { Autoplay } from "swiper/modules";
import SectionTitle from "./SectionTitle";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(set);
  const title = "Gallery";
  const description = "Check Our Gallery";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Swip = styled.div`
    background-color: ${defaultSettings.themeColors.bgColor};
    .slider-container {
      position: relative;
      width: 100%;
      margin: auto;
      padding-top: 50px;
      perspective: 1000px;
    }

    .slick-list {
      overflow: hidden;
    }

    .slick-slide {
      transition: transform 0.5s;
      transform-origin: center;
      border-radius: 5px;
      overflow: hidden;
    }

    .slick-center {
      transform: scale(1) rotateY(0deg);
      /* border: ${`5px solid ${defaultSettings.themeColors.dangerColor}`}; */
    }

    .slick-slide:not(.slick-center) {
      transform: scale(0.8) rotateY(-40deg); /*Adjust rotation for non-centered slides*/
      opacity: 0.5; /* Adjust opacity for non-centered slides */
    }

    .slider-item {
      padding: 5px;
      background: #fff;
      /* border: 1px solid #ddd; */
      text-align: center;
    }

    .slick-dots {
      position: relative;
      top: 10px;
    }

    .slick-dots li {
      width: 10px; /* Increase the width of the dots */
      height: 10px; /* Increase the height of the dots */
      margin: 0 5px; /*Adjust the spacing between dots*/
    }

    .slick-dots li button {
      width: 100%;
      height: 100%;
      padding: 5px; /* Optional: adjust padding for better spacing */
      border-radius: 50%; /* Make the dots circular */
      background: gray;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .slick-dots li button::before {
      content: "" !important;
    }

    .slick-dots li.slick-active button {
      background-color: ${defaultSettings.themeColors.dangerColor} !important;
    }
  `;

  return (
    <Swip>
      <div id="gallery" className="container py-5">
        <SectionTitle title={title} description={description}></SectionTitle>
        <div className="row" data-aos="zoom-in">
          <div className="col col-12">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slider-item">
                  <img src={Img1} className="img-fluid"></img>
                </div>
                <div className="slider-item">
                  <img src={Img2} className="img-fluid"></img>
                </div>
                <div className="slider-item">
                  <img src={Img3} className="img-fluid"></img>
                </div>
                <div className="slider-item">
                  <img src={Img4} className="img-fluid"></img>
                </div>
                <div className="slider-item">
                  <img src={Img5} className="img-fluid"></img>
                </div>
                <div className="slider-item">
                  <img src={Img6} className="img-fluid"></img>
                </div>
                <div className="slider-item">
                  <img src={Img7} className="img-fluid"></img>
                </div>
                <div className="slider-item">
                  <img src={Img8} className="img-fluid"></img>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </Swip>
  );
};
export default Gallery;
