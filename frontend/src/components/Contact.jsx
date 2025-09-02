import React, { useContext, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import { settings } from "../App";
import AOS from "aos";

//import react icons
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const title = "Contact";
  const description = "Need Help? Contact Us";

  const defaultSettings = useContext(settings);

  const ContactSection = styled.div`
    .box {
      background-color: ${defaultSettings.themeColors.bgColor};
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      svg {
        color: ${defaultSettings.themeColors.dangerColor};
      }
    }
    .form {
      background-color: ${defaultSettings.themeColors.bgColor};
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  `;

  return (
    <ContactSection id="contact">
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <SectionTitle
              title={title}
              description={description}
            ></SectionTitle>
          </div>
        </div>
        <div className="row">
          <div className="col col-12" data-aos="fade-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.5537420098226!2d77.07331117496607!3d28.881888772714458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da96923f6a47b%3A0x5b051e8fb5fdccfe!2sSafiabad%20Rd!5e0!3m2!1sen!2sin!4v1722057668526!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div
            className="col col-12 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row box rounded m-1 my-3 p-2">
              <div className="col col-1 d-flex align-items-center justify-content-center">
                <FaLocationDot className="fs-2" />
              </div>
              <div className="col d-flex justify-content-center flex-column">
                <h3 className="fs-5">Address</h3>
                <p className="m-0">A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="row box rounded m-1 my-3 p-2">
              <div className="col col-1 d-flex align-items-center justify-content-center">
                <IoCall className="fs-2" />
              </div>
              <div className="col d-flex justify-content-center flex-column">
                <h3 className="fs-5">Call Us</h3>
                <p className="m-0">+1 5589 55488 55</p>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="row box rounded m-1 my-3 p-2">
              <div className="col col-1 d-flex align-items-center justify-content-center">
                <MdEmail className="fs-2" />
              </div>
              <div className="col d-flex justify-content-center flex-column">
                <h3 className="fs-5">Email Us</h3>
                <p className="m-0">info@examole.com</p>
              </div>
            </div>
          </div>
          <div
            className="col col-12 col-lg-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="row box rounded m-1 my-3 p-2">
              <div className="col col-1 d-flex align-items-center justify-content-center">
                <FaClock className="fs-2" />
              </div>
              <div className="col d-flex justify-content-center flex-column">
                <h3 className="fs-5">Opening Hours</h3>
                <p className="m-0">
                  <b>Mon-Sat:</b> 11AM - 23PM; <b>Sunday:</b> Closed
                </p>
              </div>
            </div>
          </div>
          <div
            className="col col-12 form py-4 rounded mt-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <form>
              <div className="row g-3">
                <div className="col col-12 col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  ></input>
                </div>
                <div className="col col-12 col-lg-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  ></input>
                </div>
                <div className="col col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  ></input>
                </div>
                <div className="col col-12">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <button
                    type="submit"
                    className={`btn btn-${defaultSettings.themeColors.firstColor} rounded-pill px-4`}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactSection>
  );
};
export default Contact;
