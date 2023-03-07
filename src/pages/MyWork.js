import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import foragr from "../images/foragr.jpg";
import waves3 from "../images/waves3.png";
import melisande1 from "../images/melisande1.png";
// Animations
import { motion } from "framer-motion";
import { pageAnim, fade, lineAnim } from "../animation";
import UseScroll from "../components/useScroll";

const OurWork = () => {
  return (
    <Work variants={pageAnim} initial="hidden" animate="show" exit="exit">
      <h1>Projects</h1>
      <UseScroll>
        {waves3 && (
          <Project>
            <h2>Waves</h2>
            <motion.div
              variants={lineAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="line"
            ></motion.div>
            <Link to="/work/waves">
              <img src={waves3} alt="waves screenshot" />
            </Link>
          </Project>
        )}
      </UseScroll>
      <UseScroll>
        {foragr && (
          <Project>
            <motion.h2 variants={fade}>Foragr</motion.h2>
            <motion.div
              variants={lineAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="line"
            ></motion.div>
            <Link to="/work/foragr">
              <Hide style={{ display: "flex" }}>
                <motion.img
                  variants={fade}
                  src={foragr}
                  alt="foragr homepage"
                />
              </Hide>
            </Link>
          </Project>
        )}
      </UseScroll>
      <UseScroll>
        {melisande1 && (
          <Project>
            <h2>Melisande Yoga</h2>
            <motion.div
              variants={lineAnim}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="line"
            ></motion.div>
            <Link to="/work/melisandeyoga">
              <img src={melisande1} alt="melisande yoga" />
            </Link>
          </Project>
        )}
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
  padding-bottom: 15rem;
  .line {
    height: 0.5rem;
    background: #23dd97;
    margin-bottom: 3rem;
  }
  a {
    display: flex;
    img {
      width: 100%;
      object-fit: cover;
      border: 1px solid rgba(1, 1, 1, 0.2);
      box-shadow: 6px 6px 10px rgba(1, 1, 1, 0.2);
      margin: auto;
    }
  }
  @media (max-width: 1300px) {
    padding-bottom: 10rem;
    h2 {
      font-size: 2rem;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  width: 110%;
  height: 110%;
`;

export default OurWork;
