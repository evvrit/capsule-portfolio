import React from "react";
// Styles
import styled from "styled-components";
import { Section } from "../styles";
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
          Any questions? <span>FAQ</span>
        </h2>
        <Toggle title="How do I start?">
          <div className="answer">
            <motion.p variants={fade}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variants={fade}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              cum.
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <motion.p variants={fade}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variants={fade}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              cum.
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="Payment method">
          <div className="answer">
            <motion.p variants={fade}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variants={fade}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              cum.
            </motion.p>
          </div>
        </Toggle>
        <Toggle title="What products do you offer?">
          <div className="answer">
            <motion.p variants={fade}>Lorem ipsum dolor sit amet.</motion.p>
            <motion.p variants={fade}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              cum.
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
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;

export default FaqSection;
