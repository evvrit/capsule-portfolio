import React from "react";
// Styles
import styled from "styled-components";
import { Section, Button } from "../styles";
import Toggle from "./Toggle";
// Animations
import { motion } from "framer-motion";
import UseScroll from "./UseScroll";
import { fade } from "../animation";

const FaqSection = () => {
  return (
    <UseScroll>
      <Faq>
        <h2>
          Any questions? <span>Learn more</span>
        </h2>
        <Toggle title="My CV">
          <div className="answer">
            <motion.div variants={fade}>
              <Button
                href="https://drive.google.com/file/d/1PNSuXYQiDNkRkgfR_mVX3A_g5mk7oy_H/view?usp=sharing"
                target="_blank"
              >
                English
              </Button>
              <Button
                href="https://drive.google.com/file/d/1rKkvF4BsEM5btNMLOBAAMaVCToMi3c1n/view?usp=sharing"
                target="_blank"
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
              <span>Reps: timing is everything</span>
            </motion.p>
            <motion.p variants={fade}>
              Diving deeper into fundamentals with{" "}
              <div style={{ display: "flex" }}>
                <span>the Harvard CS50x CS Fundamentals course</span>
                <a
                  target="_blank"
                  href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
                >
                  >>
                </a>
              </div>
            </motion.p>
            <motion.p variants={fade}>
              Getting to know the library that shook front-end up with{" "}
              <div style={{ display: "flex" }}>
                <span>the Creative React & Redux course</span>
                <a
                  target="_blank"
                  href="https://developedbyed.com/courses/1203573"
                >
                  >>
                </a>
              </div>
            </motion.p>
          </div>
        </Toggle>
      </Faq>
    </UseScroll>
  );
};

const Faq = styled(Section)`
  display: block;
  span {
    display: block;
  }
  .faq-line {
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
    padding: 3rem 3rem 3rem 0rem;
    a {
      margin-left: 1rem;
    }
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;

export default FaqSection;
