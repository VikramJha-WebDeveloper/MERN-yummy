import React, { useContext, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import AOS from "aos";

// import images
import Img from "/images/tableImg.jpg";
import { settings } from "../App";

const BookTable = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(settings);

  const title = "Bool a Table";
  const description = "Book Your Stay With Us";
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12">
            <SectionTitle
              title={title}
              description={description}
            ></SectionTitle>
          </div>
        </div>
        <div
          className={`row align-items-center p-5 rounded`}
          style={{ backgroundColor: `${defaultSettings.themeColors.bgColor}` }}
          data-aos="fade-up"
        >
          <div className="col col-12 col-lg-3 d-flex align-items-center justify-content-center mb-4 mb-lg-0">
            <img src={Img} className="img-fluid" />
          </div>
          <div className="col col-12 col-lg-9">
            <form>
              <div className="row gy-3">
                <div className="col col-12 col-lg-4 d-flex align-items-center justify-content-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  ></input>
                </div>
                <div className="col col-12 col-lg-4 d-flex align-items-center justify-content-center">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  ></input>
                </div>
                <div className="col col-12 col-lg-4 d-flex align-items-center justify-content-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Phone"
                  ></input>
                </div>
                <div className="col col-12 col-lg-4 d-flex align-items-center justify-content-center">
                  <input type="date" className="form-control"></input>
                </div>
                <div className="col col-12 col-lg-4 d-flex align-items-center justify-content-center">
                  <input type="time" className="form-control"></input>
                </div>
                <div className="col col-12 col-lg-4 d-flex align-items-center justify-content-center">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="# of people"
                  ></input>
                </div>

                <div className="col col-12 d-flex align-items-center justify-content-center">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
                <div className="col col-12 d-flex align-items-center justify-content-center">
                  <button
                    type="submit"
                    className={`btn btn-${defaultSettings.themeColors.firstColor}`}
                  >
                    Book a Table
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default BookTable;
