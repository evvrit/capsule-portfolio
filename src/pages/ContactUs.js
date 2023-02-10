import React from "react";
//Styles
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnim, titleAnim } from "../animation";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

const Contact = () => {
  return (
    <StyledContact
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnim}>
          <Tooltip>email copied to clipboard</Tooltip>
          <StyledIcon
            src={email}
            alt="email"
            style={{ width: "3.6rem", margin: "0.2rem" }}
            onClick={() => {
              navigator.clipboard.writeText("turpin.elyse@gmail.com");
            }}
          ></StyledIcon>
          <h4>Send Me A Message</h4>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <a href="https://www.linkedin.com/in/elyse-turpin/">
            <StyledIcon src={linkedin} alt="linkedin" />
          </a>
          <h4>Connect on LinkedIn</h4>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <a href="https://github.com/evvrit">
            <StyledIcon src={github} alt="github" />
          </a>
          <h4>Follow Along on Github</h4>
        </Social>
      </Hide>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 900px) {
    padding: 3rem 3rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  h4 {
    margin: 2rem;
  }
`;

const StyledIcon = styled.img`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  &:hover {
    scale: 90%;
    transition: all 0.2s ease;
  }
  &: hover .sc-liQGml gmHMi {
    visibility: visible;
  }
`;

const Tooltip = styled.span`
  position: absolute;
  visibility: hidden;
  z-index: 1;
  color: black;
  top: 0;
`;

export default Contact;
