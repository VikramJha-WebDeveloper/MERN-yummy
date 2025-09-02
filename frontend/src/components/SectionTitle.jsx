import { React, useEffect, useContext } from "react";
import AOS from "aos";
import styled from "styled-components";
import { settings } from "../App";

const SectionTitle = ({ title, description }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  const defaultSettings = useContext(settings);

  const TitleSection = styled.div`
    word-spacing: 5px;
  `;

  return (
    <TitleSection className="mb-5" data-aos="fade-up">
      <h2
        className={`text-uppercase fs-6 text-center mb-3 text-${defaultSettings.themeColors.firstColor}`}
      >
        {title}
      </h2>
      <h3
        className="text-uppercase text-center"
        style={{ fontFamily: `${defaultSettings.fontFamily}` }}
      >
        {description}
      </h3>
    </TitleSection>
  );
};
export default SectionTitle;
