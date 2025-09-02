import React, { useContext } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { settings as set } from "../App";

// import images
import Img1 from "/images/eventsImg1.jpg";
import Img2 from "/images/eventsImg2.jpg";
import Img3 from "/images/eventsImg3.jpg";
import Img4 from "/images/eventsImg4.jpg";

const data = [
  {
    image: Img1,
    parties: "Custom Parties",
    price: "$99",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci harum consequuntur repellendus ipsam qui? Neque quasi
                itaque tempore molestiae possimus.`,
  },
  {
    image: Img2,
    parties: "Private Parties",
    price: "$289",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci harum consequuntur repellendus ipsam qui? Neque quasi
                itaque tempore molestiae possimus.`,
  },
  {
    image: Img3,
    parties: "Birthday Parties",
    price: "$499",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci harum consequuntur repellendus ipsam qui? Neque quasi
                itaque tempore molestiae possimus.`,
  },
  {
    image: Img4,
    parties: "Wedding Parties",
    price: "$899",
    paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci harum consequuntur repellendus ipsam qui? Neque quasi
                itaque tempore molestiae possimus.`,
  },
];

const Events = () => {
  const defaultSettings = useContext(set);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Auto slide every 2 seconds
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const EventsSection = styled.div`
    .descript {
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      top: 0;
      left: 0;
      h3 {
        font-family: ${defaultSettings.fontFamily} !important;
      }
    }
  `;

  return (
    <EventsSection id="events">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={data.indexOf(item)} className="position-relative">
            <img src={item.image} className="img-fluid" />
            <div className="descript text-light d-flex flex-column justify-content-end">
              <div className="px-3">
                <h3 className="fs-5">{item.parties}</h3>
                <h4
                  className={` border-bottom border-${defaultSettings.themeColors.firstColor} border-2 d-inline-block`}
                >
                  {item.price}
                </h4>
                <p>{item.paragraph}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </EventsSection>
  );
};
export default Events;
