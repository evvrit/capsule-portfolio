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
    <Section>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Hi! I'm</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Elyse.</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          My goal is to deliver business value while leveling up my skills as a
          developer. I'm particularly interested in the software lifecycle and
          writing resilient code.
        </motion.p>
        <motion.div variants={fade}>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </motion.div>
      </Description>
      <Avatar>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={me2}
          alt="smiling girl"
        />
        <motion.p variants={fade} initial="hidden" animate="show">
          Full Stack Developer
        </motion.p>
        <motion.p
          style={{ fontSize: "1.2rem", padding: "0" }}
          variants={fade}
          initial="hidden"
          animate="show"
        >
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Montreal, QC
        </motion.p>
      </Avatar>
      <Wave />
    </Section>
  );
};

const Avatar = styled(Image)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  img {
    border-radius: 50%;
    height: 40vh;
    width: 40vh;
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
  @media (max-width: 1300px) {
    margin: auto;
    padding: 2rem 0rem;
    img {
      width: 25vh;
      height: 25vh;
    }
  }
`;
export default AboutSection;
