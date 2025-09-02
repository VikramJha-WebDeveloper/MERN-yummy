import { React, useEffect, useContext } from "react";
import AOS from "aos";
import { keyframes, styled } from "styled-components";

import { settings } from "../App";

// import react icons
import { FaCheckCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

// import images
import Img1 from "/images/aboutImg1.jpg";
import Img2 from "/images/aboutImg2.jpg";

// import videos
import Video1 from "/videos/aboutVideo.mp4";

// import heading section
import SectionTitle from "./SectionTitle";

// define keyframes
const move = keyframes`
  from{
    transform: scale(1);
  }to{
    transform: scale(1.3)
  }
`;

// create a styled component for play button
const MovingElement = styled.div`
  animation-name: ${move};
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSetting = useContext(settings);

  const title = "About Us";
  const description = "Learn More About Us";

  return (
    <>
      <div id="about" className="container py-5">
        <div className="row">
          <div className="col col-12">
            <SectionTitle
              title={title}
              description={description}
            ></SectionTitle>
          </div>
        </div>
        <div className="row">
          <div className="col col-12 col-lg-7">
            <div className="card border-0">
              <img className="img-fluid" src={Img1} data-aos="fade-up" />
              <div
                className="card-body border border-secondary border-4 my-3"
                data-aos="fade-up"
              >
                <h4 className="text-center">Book a Table</h4>
                <h5
                  className={`text-center fs-3 text-${defaultSetting.themeColors.firstColor}`}
                >
                  +1 5589 55488 55
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-5" data-aos="fade-up">
            <p style={{ color: `${defaultSetting.themeColors.lightDark}` }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-group">
              <li className="list-group-item border-0 p-0 mb-2">
                <FaCheckCircle
                  className={`text-${defaultSetting.themeColors.firstColor}`}
                />{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
              <li className="list-group-item border-0 p-0 mb-2">
                <FaCheckCircle
                  className={`text-${defaultSetting.themeColors.firstColor}`}
                />{" "}
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li className="list-group-item border-0 p-0 mb-2">
                <FaCheckCircle
                  className={`text-${defaultSetting.themeColors.firstColor}`}
                />{" "}
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </ul>
            <p className="mt-3">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <div className="card overflow-hidden border-0 d-flex align-items-center justify-content-center">
              <img src={Img2} />
              <MovingElement className="position-absolute">
                <FaPlayCircle
                  className={` display-1 text-light`}
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#modalVideo"
                />
              </MovingElement>
              <div className="modal fade" id="modalVideo">
                <div className="modal-dialog modal-xl">
                  <div className="modal-content">
                    <div className="modal-body">
                      <video width="100%" controls>
                        <source src={Video1}></source>
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
