import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import styled from "styled-components";
import AOS from "aos";

// import images
import Img1 from "/images/chefImg1.jpg";
import Img2 from "/images/chefImg2.jpg";
import Img3 from "/images/chefImg3.jpg";

const data = [
  {
    _id: 0,
    img: Img1,
    title: "Walter White",
    name: "Master Chef",
    description:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    fadeDelay: 100,
  },
  {
    _id: 0,
    img: Img2,
    title: "Sarah Jhonson",
    name: "Patissior",
    description:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    fadeDelay: 200,
  },
  {
    _id: 0,
    img: Img3,
    title: "William Anderson",
    name: "Cook",
    description:
      "Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur ipsa quae aut. Ipsum exercitationem iure minima enim corporis et voluptate.",
    fadeDelay: 300,
  },
];

const Chefs = () => {
  const title = "Chefs";
  const description = "Our Proffesional Chefs";

  const ChefSection = styled.div``;
  return (
    <ChefSection id="chefs" className="mt-5">
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
          {data.map((item) => (
            <div
              className="col col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay={item.fadeDelay}
            >
              <div className="card">
                <img src={item.img} />
                <div className="card-body text-center">
                  <h3 className="fs-5 fw-bolder">{item.title}</h3>
                  <h4 className="card-title text-secondary fs-6">
                    {item.name}
                  </h4>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ChefSection>
  );
};

export default Chefs;
