import React, { useContext, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import BgImage from "/images/statsImg.jpg";
import { settings } from "../App";
import AOS from "aos";

const items = [
  {
    id: 1,
    name: "item_1",
    start: 0,
    end: 232,
    about: "Clients",
  },
  {
    id: 2,
    name: "item_2",
    start: 0,
    end: 521,
    about: "Projects",
  },
  {
    id: 3,
    name: "item_3",
    start: 0,
    end: 1453,
    about: "Hours of Support",
  },
  {
    id: 4,
    name: "item_4",
    start: 0,
    end: 32,
    about: "Workers",
  },
];

const Stats = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(settings);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this value to control when the counting starts
  });

  const bg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <div style={bg} className="py-5">
      <div className="container p-5">
        <div className="row">
          {items.map((data) => (
            <div
              key={data.id}
              className="col-12 col-lg-3 col-md-6 mt-5 mt-md-0"
            >
              <div ref={ref} data-aos="fade-up">
                <h1 className="text-center m-0 fw-bolder display-5 text-light">
                  {inView && (
                    <CountUp
                      start={data.start}
                      end={data.end}
                      duration={2.75}
                    />
                  )}
                </h1>
                <h6 className={`text-center text-light`}>{data.about}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Stats;
