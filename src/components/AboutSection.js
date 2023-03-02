import React from "react";
// Images
import me2 from "../images/me2.jpg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// Styles
import styled from "styled-components";
// Components
import Wave from "./Wave";
import { Section, Description, Image, Hide } from "../styles";
// Animations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <Section style={{ display: "block" }}>
      <Wave />
      <motion.div
        style={{
          display: "flex",
          position: "relative",
          alignItems: "space-between",
          justifyContent: "space-around",
          border: "1px solid red",
        }}
      >
        <AboutTitle className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hi! I'm</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Elyse.</span>
            </motion.h2>
          </Hide>
          <AboutDescription>
            <div>
              <motion.p variants={fade}>
                My goal is to deliver business value while leveling up my skills
                as a developer. I'm particularly interested in the software
                lifecycle and writing resilient code.
              </motion.p>
              <motion.div variants={fade}>
                <Link to="/contact">
                  <button>Contact</button>
                </Link>
              </motion.div>
            </div>
          </AboutDescription>
        </AboutTitle>
        <Avatar>
          <motion.img
            variants={photoAnim}
            initial="hidden"
            animate="show"
            src={me2}
            alt="elyse smiling"
          />
          <motion.p variants={fade} initial="hidden" animate="show">
            Full Stack Developer
          </motion.p>
          <motion.p
            style={{ padding: "0" }}
            variants={fade}
            initial="hidden"
            animate="show"
          >
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Montreal, QC
          </motion.p>
        </Avatar>
      </motion.div>
    </Section>
  );
};

const Avatar = styled(Image)`
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
  @media (max-width: 900px) {
    padding: 0rem;
    width: 100%;
    text-align: center;
    margin-top: 18rem;
  }
`;

const AboutTitle = styled(motion.div)`
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
