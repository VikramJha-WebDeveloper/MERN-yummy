import React, { useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import AOS from "aos";
import { settings } from "../App";

// import icons
import { FaRegCirclePlay } from "react-icons/fa6";

// import images
import HeroImg from "/images/heroImg2.png";

const Hero = () => {
  const defaultSettings = useContext(settings);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  const imageAnim = keyframes`
    0%{
      top: -5px;
      left: 0;
    }
    50%{
      top: 5px;
      left: 0;
    }
    100%{
      top: -5px;
      left: 0;
    }
  `;

  const HeroSection = styled.div`
    background-color: ${defaultSettings.themeColors.bgColor};
    height: calc(100vh - 56px);
    h1 {
      word-spacing: 10px;
    }
    img {
      position: relative;
      animation-name: ${imageAnim};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  `;
  return (
    <HeroSection id="hero">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col col-12 col-lg-6 d-flex flex-column align-items-start justify-content-center order-2 order-lg-1">
            <h1
              className="display-5 text-uppercase fw-bolder lh-base"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ fontFamily: `${defaultSettings.fontFamily}` }}
            >
              Enjoy Your Healthy
              <br />
              Delicious Food
            </h1>
            <p data-aos="fade-up" data-aos-delay="300">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div data-aos="fade-up" data-aos-delay="500">
              <button type="button" className="btn btn-danger">
                Book a Table
              </button>
              <button type="button" className="btn ms-3">
                <FaRegCirclePlay className="fs-3" /> Watch Video
              </button>
            </div>
          </div>
          <div className="col col-12 col-lg-6 d-flex align-items-center justify-content-center order-1 order-lg-2">
            <img src={HeroImg} className="w-75" data-aos="zoom-in" />
          </div>
        </div>
      </div>
    </HeroSection>
  );
};
export default Hero;
