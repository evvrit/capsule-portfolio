import React from "react";
// Styles
import styled from "styled-components";
import { Section, Button } from "../styles";
import Toggle from "./Toggle";
// Animations
import { motion } from "framer-motion";
import UseScroll from "./useScroll";
import { fade } from "../animation";

const MoreSection = () => {
  return (
    <UseScroll>
      <More>
        <h2>
          <span>Dive deeper</span>
        </h2>
        <Toggle title="My CV">
          <div className="answer">
            <motion.div variants={fade} style={{ marginTop: "2rem" }}>
              <Button
                href="https://drive.google.com/file/d/1PNSuXYQiDNkRkgfR_mVX3A_g5mk7oy_H/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                English
              </Button>
              <Button
                href="https://drive.google.com/file/d/1rKkvF4BsEM5btNMLOBAAMaVCToMi3c1n/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Français
              </Button>
            </motion.div>
          </div>
        </Toggle>
        <Toggle title="Currently working on">
          <div className="answer">
            <motion.p variants={fade}>
              Building a study tracker for better long-term recall
              <span style={{ visibility: "hidden" }}>
                Reps: timing is everything
              </span>
            </motion.p>
            <motion.p variants={fade}>
              Mastering CS logic
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
              >
                <span style={{ cursor: "pointer" }}>
                  Harvard CS50x CS Fundamentals
                </span>
              </a>
            </motion.p>
            <motion.p variants={fade}>
              Getting to know the library that shook front-end
              <a
                target="_blank"
                rel="noreferrer"
                href="https://developedbyed.com/courses/1203573"
              >
                <span style={{ cursor: "pointer" }}>
                  DevEd's Creative React & Redux course
                </span>
              </a>
            </motion.p>
          </div>
        </Toggle>
      </More>
    </UseScroll>
  );
};

const More = styled(Section)`
  display: block;
  margin-top: 4rem;
  span {
    display: block;
  }
  .bookend-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    cursor: default;
    p {
      padding: 3rem 0rem 0rem 0rem;
    }
    padding: 2rem 3rem 3rem 0rem;
    @media (max-width: 1300px) {
      padding: 3rem 0rem 3rem 0rem;
    }
  }
`;

export default MoreSection;
