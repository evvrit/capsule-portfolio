import React from "react";
//Styles
import styled from "styled-components";
// Animations
import { m, domAnimation, LazyMotion } from "framer-motion";
import { pageAnim, titleAnim, lineAnim, fade } from "../animation";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const Contact = () => {
  const copyToClipboardHandler = () => {
    const copiedTooltip = document.getElementById("tooltip");
    copiedTooltip.style.opacity = 1;
    navigator.clipboard.writeText("turpin.elyse@gmail.com");

    setTimeout(() => {
      copiedTooltip.style.opacity = 0;
    }, "2000");
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <StyledContact
        variants={pageAnim}
        initial="hidden"
        animate="show"
        exit="exit"
        style={{ background: "#fff" }}
      >
        <Title>
          <m.h2 variants={fade} initial="hidden" animate="show">
            Get In Touch
          </m.h2>
          <m.div
            variants={lineAnim}
            initial="hidden"
            animate="show"
            transition={{ delay: 0 }}
            className="line"
          ></m.div>
        </Title>
        <Hide>
          <Social
            variants={titleAnim}
            animate={{ transition: { duration: 0.15 } }}
            onClick={() => copyToClipboardHandler()}
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <h4>Send Me An Email</h4>
            <Tooltip id="tooltip">copied!</Tooltip>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            animate={{ transition: { duration: 0.15 } }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/elyse-turpin/"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <h4>Connect on LinkedIn</h4>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            animate={{ transition: { duration: 0.15 } }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/evvrit"
            >
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <h4>Follow Along on Github</h4>
          </Social>
        </Hide>
      </StyledContact>
    </LazyMotion>
  );
};

const StyledContact = styled(m.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 900px) {
    padding: 3rem 3rem;
  }
`;

const Title = styled(m.div)`
  h2 {
    padding: 1rem 0rem;
  }
  color: #353535;
  @media (max-width: 1300px) {
    margin-top: 5rem;
    h2 {
      font-size: 3rem;
    }
  }
  .line {
    height: 0.5rem;
    background: #23dd97;
    margin-bottom: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(m.div)`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  h4 {
    margin: 2rem;
  }
  svg {
    color: #353535;
    width: 4rem;
    height: 4rem;
    cursor: pointer;
    &:hover {
      scale: 90%;
      transition: all 0.2s ease;
    }
  }
  @media (max-width: 1300px) {
    h4 {
      font-size: 1.5rem;
    }
  }
`;

const Tooltip = styled(m.div)`
  font-size: 1.3rem;
  transition: all 0.1s ease-out;
  color: #353535;
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1;
  svg {
    height: 1.6rem;
  }
`;

export default Contact;
