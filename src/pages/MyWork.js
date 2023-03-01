import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import foragr1 from "../images/foragr-collage.png";
import waves3 from "../images/waves3.png";
import melisande1 from "../images/melisande1.png";
// Animations
import { motion } from "framer-motion";
import { pageAnim, fade, photoAnim, lineAnim } from "../animation";
import UseScroll from "../components/UseScroll";

const OurWork = () => {
  return (
    <Work variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <h1>Projects</h1>
      <UseScroll>
        <Project>
          <h2>Waves</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/waves">
            <img src={waves3} alt="waves screenshot" />
          </Link>
        </Project>
      </UseScroll>
      <UseScroll>
        <Project>
          <motion.h2 variants={fade}>Foragr</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/foragr">
            <Hide>
              <motion.img
                variants={photoAnim}
                src={foragr1}
                alt="foragr on mobile"
              />
            </Hide>
          </Link>
        </Project>
      </UseScroll>
      <UseScroll>
        <Project>
          <h2>Melisande Yoga</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/melisandeyoga">
            <img src={melisande1} alt="melisande yoga" />
          </Link>
        </Project>
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
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;

const Project = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23dd97;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;
