import React, { useContext, useEffect } from "react";
import { settings } from "../App";
import { styled } from "styled-components";
import AOS from "aos";

// import react icons
import { BsClipboardDataFill } from "react-icons/bs";
import { FaGem } from "react-icons/fa";
import { MdAllInbox } from "react-icons/md";

const Choose = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(settings);

  // create styled component
  const ChooseSection = styled.div`
    background-color: ${defaultSettings.themeColors.bgColor};
    .chooseBox h3 {
      transition-duration: 0.3s;
    }
    .chooseBox {
      &:hover h3 {
        color: ${defaultSettings.themeColors.dangerColor} !important;
      }
    }
  `;

  return (
    <ChooseSection>
      <div className="container py-5">
        <div className="row">
          <div className={`col col-12 col-lg-4`} data-aos="flip-left">
            <div
              className={`bg-${defaultSettings.themeColors.firstColor} h-100 d-flex flex-column align-items-center justify-content-center p-4 text-light`}
            >
              <h2>Why Choose Yummy</h2>
              <p className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit Asperiores dolores sed et.
                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus
                optio ad corporis.
              </p>
              <button
                className="btn btn-primary rounded-pill border-0 px-4"
                style={{ background: "red" }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="col col-12 col-lg-8">
            <div className="row h-100">
              <div
                className="col col-12 col-xl-4 mt-3 mt-xl-0"
                data-aos="flip-left"
              >
                <div
                  style={{ backgroundColor: "white" }}
                  className="d-flex flex-column align-items-center justify-content-center p-4 h-100 chooseBox"
                >
                  <BsClipboardDataFill
                    className={`fs-1 text-${defaultSettings.themeColors.firstColor}`}
                  />
                  <h3 className="my-3 fs-5 text-center">
                    Corporis voluptates officia eiusmod
                  </h3>
                  <p
                    className={`text-center`}
                    style={{
                      color: `${defaultSettings.themeColors.lightDark}`,
                    }}
                  >
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                  </p>
                </div>
              </div>
              <div
                className="col col-12 col-xl-4 mt-3 mt-xl-0"
                data-aos="flip-left"
              >
                <div
                  style={{ backgroundColor: "white" }}
                  className="d-flex flex-column align-items-center justify-content-center p-4 h-100 chooseBox"
                >
                  <FaGem
                    className={`fs-1 text-${defaultSettings.themeColors.firstColor}`}
                  />
                  <h3 className="my-3 fs-5 text-center">
                    Ullamco laboris ladore lore pan
                  </h3>
                  <p
                    className={`text-center`}
                    style={{
                      color: `${defaultSettings.themeColors.lightDark}`,
                    }}
                  >
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </p>
                </div>
              </div>
              <div
                className="col col-12 col-xl-4 mt-3 mt-xl-0"
                data-aos="flip-left"
              >
                <div
                  style={{ backgroundColor: "white" }}
                  className="d-flex flex-column align-items-center justify-content-center p-4 h-100 chooseBox"
                >
                  <MdAllInbox
                    className={`fs-1 text-${defaultSettings.themeColors.firstColor}`}
                  />
                  <h3 className="my-3 fs-5 text-center">
                    Labore consequatur incidid dolore
                  </h3>
                  <p
                    className={`text-center`}
                    style={{
                      color: `${defaultSettings.themeColors.lightDark}`,
                    }}
                  >
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                    maiores omnis facere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChooseSection>
  );
};

export default Choose;
