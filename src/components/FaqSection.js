import React, { useRef } from "react";
// Styles
import styled from "styled-components";
import { Section } from "../styles";
import Toggle from "./Toggle";
// Animations
import { motion, AnimateSharedLayout, useInView } from "framer-motion";
import { fade } from "../animation";

const FaqSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });
  return (
    <Faq
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.8s ease",
      }}
    >
      <h2>
        Any questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
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
      </AnimateSharedLayout>
    </Faq>
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
