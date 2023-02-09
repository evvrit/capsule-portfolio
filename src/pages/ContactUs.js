import React from "react";
//Styles
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnim, titleAnim } from "../animation";

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
          <StyledIcon></StyledIcon>
          <h4>Send Me A Message</h4>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <StyledIcon></StyledIcon>
          <h4>Connect on LinkedIn</h4>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <StyledIcon></StyledIcon>
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
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 100%;
  h4 {
    margin: 2rem;
  }
`;

const StyledIcon = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
export default Contact;
