import React, { useContext, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import AOS from "aos";

// import images
import Img1 from "/images/testimonialImg1.jpg";
import Img2 from "/images/testimonialImg2.jpg";
import Img3 from "/images/testimonialImg3.jpg";
import Img4 from "/images/testimonialImg4.jpg";

// import react icons
import { FaStar } from "react-icons/fa";
import { settings } from "../App";

const data = [
  {
    id: 1,
    image: Img1,
    descript: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero adipisci velit maiores quisquam. Omnis eos, non,
                        placeat, ab eius suscipit quis repellat animi totam ut
                        corporis delectus obcaecati nesciunt recusandae.`,
    name: "Saol Goodman",
    position: "CEO and Founder",
    activeness: "active",
    slideTo: 0,
  },
  {
    id: 2,
    image: Img2,
    descript: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero adipisci velit maiores quisquam. Omnis eos, non,
                        placeat, ab eius suscipit quis repellat animi totam ut
                        corporis delectus obcaecati nesciunt recusandae.`,
    name: "Sara Willson",
    position: "Designer",
    activeness: "notActive",
    slideTo: 1,
  },
  {
    id: 3,
    image: Img3,
    descript: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero adipisci velit maiores quisquam. Omnis eos, non,
                        placeat, ab eius suscipit quis repellat animi totam ut
                        corporis delectus obcaecati nesciunt recusandae.`,
    name: "Jena Karlis",
    position: "Store Owner",
    activeness: "notActive",
    slideTo: 2,
  },
  {
    id: 4,
    image: Img4,
    descript: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero adipisci velit maiores quisquam. Omnis eos, non,
                        placeat, ab eius suscipit quis repellat animi totam ut
                        corporis delectus obcaecati nesciunt recusandae.`,
    name: "John Larson",
    position: "EntrePreneur",
    activeness: "notActive",
    slideTo: 3,
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(settings);
  const title = "Testimonials";
  const description = "What are they saying about us";

  const TestimonialSection = styled.div`
    background-color: ${defaultSettings.themeColors.bgColor};
  `;
  return (
    <TestimonialSection>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <SectionTitle
              title={title}
              description={description}
            ></SectionTitle>
          </div>
        </div>
        <div className="row text-light">
          <div className="mx-auto col col-12 col-lg-8" data-aos="zoom-in">
            <div
              id="testimonialCarousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {data.map((testimonial) => (
                  <button
                    key={testimonial.id}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={data.indexOf(testimonial)}
                    className={`${testimonial.activeness}`}
                  ></button>
                ))}
              </div>
              <div
                className={`carousel-inner border p-4 rounded bg-${defaultSettings.themeColors.firstColor}`}
              >
                {data.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`carousel-item  ${testimonial.activeness}`}
                  >
                    <div className="row justify-content-center">
                      <div className="col col-12 col-lg-9">
                        <p>{testimonial.descript}</p>
                        <h3 className="fs-5">{testimonial.name}</h3>
                        <h4 className="fs-6">{testimonial.position}</h4>
                        <div>
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                          <FaStar className="text-warning" />
                        </div>
                      </div>
                      <div className="col col-12 col-lg-3 align-items-center justify-content-center mb-4 mb-lg-0 justify-content-lg-end d-flex">
                        <img
                          src={testimonial.image}
                          className="rounded rounded-circle"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </TestimonialSection>
  );
};
export default Testimonials;
