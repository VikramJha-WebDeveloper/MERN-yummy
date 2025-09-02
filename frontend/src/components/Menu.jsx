import React, { useContext, useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import { settings } from "../App";
import styled from "styled-components";
import { Modal, Button } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import AOS from "aos";

// import images
import img1 from "/images/menu1.jpg";
import img2 from "/images/menu2.jpg";
import img3 from "/images/menu3.jpg";
import img4 from "/images/menu4.jpg";
import img5 from "/images/menu5.jpg";
import img6 from "/images/menu6.jpg";

// data list
const data = [
  {
    id: 1,
    img: img1,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${5.95}`,
    fadeDelay: 100,
  },
  {
    id: 2,
    img: img2,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${14.95}`,
    fadeDelay: 200,
  },
  {
    id: 3,
    img: img3,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${8.95}`,
    fadeDelay: 300,
  },
  {
    id: 4,
    img: img4,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${12.95}`,
    fadeDelay: 100,
  },
  {
    id: 5,
    img: img5,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${12.95}`,
    fadeDelay: 200,
  },
  {
    id: 6,
    img: img6,
    title: "Mangam Tiste",
    description: "Lorem, ipsum, dolor, sit, amet",
    price: `$${9.95}`,
    fadeDelay: 300,
  },
];

const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(settings);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleOnClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };
  const handleOnClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };
  const title = "Our Menu";
  const description = "Check Our Yummy Menu";

  const MenuSection = styled.div`
    img {
      cursor: pointer;
    }
  `;

  return (
    <MenuSection id="menu">
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
              key={item.id}
              className="col col-12 col-lg-4 mt-3"
              data-aos="fade-up"
              data-aos-delay={item.fadeDelay}
            >
              <div className="card overflow-hidden">
                <img
                  src={item.img}
                  data-bs-toggle="modal"
                  data-bs-target="#imgModal"
                  onClick={() => {
                    handleOnClick(item.img);
                  }}
                />

                <div className="card-body text-center">
                  <h3 className="card-title fs-4 fw-normal">{item.title}</h3>
                  <p className="card-text text-secondary">{item.description}</p>
                  <h4
                    className={`fs-5 fw-bolder text-${defaultSettings.themeColors.firstColor}`}
                  >
                    {item.price}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal}>
        <Modal.Body>
          {selectedImage && <img src={selectedImage} className="img-fluid" />}
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`btn btn-${defaultSettings.themeColors.firstColor} d-flex align-items-center justify-content-center`}
          >
            <FaWindowClose onClick={() => handleOnClose()} />
          </button>
        </Modal.Footer>
      </Modal>
    </MenuSection>
  );
};
export default Menu;
