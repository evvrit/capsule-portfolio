import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import athlete from "../images/athlete-small.png";
import theracer from "../images/theracer-small.png";
import goodtimes from "../images/goodtimes-small.png";
// Animations
import { motion } from "framer-motion";
import { pageAnim, fade, photoAnim, lineAnim } from "../animation";
import UseScroll from "../components/UseScroll";

const OurWork = () => {
  return (
    <Work variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <h1>Our Work</h1>
      <UseScroll>
        <Movie>
          <motion.h2 variants={fade}>The Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="athlete" />
            </Hide>
          </Link>
        </Movie>
      </UseScroll>
      <UseScroll>
        <Movie>
          <h2>The Racer</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-racer">
            <img src={theracer} alt="the racer" />
          </Link>
        </Movie>
      </UseScroll>
      <UseScroll>
        <Movie>
          <h2>Good Times</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="good times" />
          </Link>
        </Movie>
      </UseScroll>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: #fff;
  h1,
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23dd97;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;
