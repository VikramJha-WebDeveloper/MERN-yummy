import React, { useContext } from "react";
import styled from "styled-components";

// import react icons
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { settings } from "../App";
import { defaultFallbackInView } from "react-intersection-observer";

const Footer = () => {
  const defaultSettings = useContext(settings);

  const FooterSection = styled.div`
    svg {
      color: ${defaultSettings.themeColors.dangerColor} !important;
    }
    .socialMedia {
      color: gray !important;
      font-size: 25px;
      margin-right: 10px;
    }
    span {
      color: ${defaultSettings.themeColors.dangerColor};
    }
  `;
  return (
    <FooterSection className="bg-dark">
      <div className="container py-5 text-light">
        <div className="row">
          <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-lg-0">
            <h3 className="fs-6 fw-bolder">
              <FaLocationDot className="me-2 fs-5" />
              Address
            </h3>
            <p>
              A108 Adam Street New York, <br />
              NY 535022
            </p>
          </div>
          <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-lg-0">
            <h3 className="fs-6 fw-bolder">
              <IoCall className="me-2 fs-5" />
              Contact
            </h3>
            <div>Phone: +1 5589 55488 55</div>
            <div>Email: info@example.com</div>
          </div>
          <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-lg-0">
            <h3 className="fs-6 fw-bolder">
              <FaClock className="me-2 fs-5" />
              Address
            </h3>
            <div>Mon-Sat: 11AM - 23PM</div>
            <div>Sunday: Closed</div>
          </div>
          <div className="col col-12 col-lg-3 col-md-6 mt-3 mt-lg-0">
            <h3 className="fs-6 fw-bolder">Follow Us</h3>
            <div>
              <FaSquareXTwitter className="socialMedia" />
              <FaFacebook className="socialMedia" />
              <FaInstagramSquare className="socialMedia" />
              <FaLinkedin className="socialMedia" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <hr />
          <div>
            <p className="m-0 text-center">
              &copy; Copyright Yummy All Rights Reserved
            </p>
            <p className="m-0 text-center">
              Designed by <span>BootstrapMade</span>
            </p>
          </div>
        </div>
      </div>
    </FooterSection>
  );
};
export default Footer;
