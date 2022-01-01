import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";
const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} />
      <HeaderContainer>
        <h1>
          About Software Developer <span>Müslüm Yurtada</span>
        </h1>
      </HeaderContainer>
      <InfoContainer>
        <h2>Hi, I'am Müslüm</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, ReactNative, NodeJS, MongoDB,SQL,
          Python, AWS Services.
        </h4>
        <h2>
          <a href="mslmyrtd@gmail.com">Send email</a> : mslmyrtd@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
