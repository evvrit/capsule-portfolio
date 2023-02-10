import React, { useEffect, useState } from "react";
//Styles
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { fade, pageAnim, titleAnim } from "../animation";
import email from "../images/email.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [clicked, setClicked] = useState(false);

  const copyToClipboardHandler = () => {
    const copiedTooltip = document.getElementById("tooltip");
    copiedTooltip.style.opacity = 1;
    navigator.clipboard.writeText("turpin.elyse@gmail.com");

    setTimeout(() => {
      copiedTooltip.style.opacity = 0;
    }, "1000");
  };

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
          <Tooltip id="tooltip">
            <FontAwesomeIcon
              icon={faClipboardCheck}
              style={{
                fontSize: "1.5rem",
                color: "#222222",
                paddingRight: "0.2rem",
              }}
            />
            copied!
          </Tooltip>
          <StyledIcon
            src={email}
            alt="email"
            style={{
              width: "3.6rem",
              margin: "0.2rem",
            }}
            id="email"
            onClick={() => copyToClipboardHandler()}
          ></StyledIcon>
          <h4>Send Me An Email</h4>
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

const StyledIcon = styled(motion.img)`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
  &:hover {
    scale: 90%;
    transition: all 0.2s ease;
  }
`;

const Tooltip = styled(motion.span)`
  color: #222222;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0rem 0.4rem;
`;

export default Contact;
