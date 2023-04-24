import React from "react";
// Link
import { Link } from "react-router-dom";
// Images
import me from "../images/elyse.jpg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
// Styles
import styled from "styled-components";
// Components
import Wave from "./Wave";
import { Section, Description, Hide } from "../styles";
// Animations
import { LazyMotion, m, domAnimation } from "framer-motion";
import { titleAnim, fade } from "../animation";

const AboutSection = () => {
  return (
    <Section style={{ display: "block", marginTop: "4rem" }}>
      <Wave />
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-around",
        }}
      >
        <LazyMotion features={domAnimation} strict>
          <AboutTitle className="title">
            <Hide>
              <m.h2 variants={titleAnim}>Hi! I'm</m.h2>
            </Hide>
            <Hide>
              <m.h2 variants={titleAnim}>
                <span>Elyse.</span>
              </m.h2>
            </Hide>
            <AboutDescription>
              <p>
                My goal is to deliver business value while leveling up my skills
                as a developer. I'm particularly interested in the software
                lifecycle and writing resilient code.
              </p>
              <Link to="/contact">Contact</Link>
            </AboutDescription>
          </AboutTitle>
          <Avatar variants={fade} initial="hidden" animate="show">
            <img src={me} alt="Elyse Turpin, Full Stack Developer"></img>
            <p>Full Stack Developer</p>
            <p style={{ padding: "0" }}>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Montreal,
              QC
            </p>
          </Avatar>
        </LazyMotion>
      </div>
    </Section>
  );
};

const Avatar = styled(m.div)`
  position: absolute;
  top: 0%;
  right: 0%;
  text-align: center;
  img {
    border-radius: 50%;
    height: 30vh;
    width: 30vh;
    padding: 0rem 0rem 1rem 2rem;
  }
  p {
    font-family: "Unbounded", cursive;
    padding: 1rem 0rem;
    margin: 0;
  }
  svg {
    font-size: 1.2rem;
    margin-right: 0.8rem;
  }
  @media (max-width: 900px) {
    padding: 0rem;
    top: 12rem;
    left: 50%;
    transform: translateX(-50%);
    img {
      width: 15vh;
      height: 15vh;
    }
    p,
    svg {
      font-size: smaller;
      line-height: 1rem;
    }
  }
`;

const AboutDescription = styled(Description)`
  width: 50%;
  display: block;
  a {
    justify-content: space-around;
    text-align: center;
    width: 80%;
    font-weight: bold;
    margin: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 1rem 3rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
  @media (max-width: 900px) {
    padding: 0rem;
    width: 100%;
    text-align: center;
    margin-top: 18rem;
  }
`;

const AboutTitle = styled(m.div)`
  text-align: left;
  line-height: 6rem;
  @media (max-width: 900px) {
    h2 {
      scale: 80%;
      line-height: 4rem;
      text-align: center;
    }
  }
`;
export default AboutSection;
