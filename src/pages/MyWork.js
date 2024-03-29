import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import foragr from "../images/foragr.jpg";
import waves3 from "../images/waves3.png";
import melisande1 from "../images/melisande1.png";
// Animations
import { m, LazyMotion, domAnimation } from "framer-motion";
import { pageAnim, lineAnim } from "../animation";
import UseScroll from "../components/useScroll";

const OurWork = () => {
  return (
    <LazyMotion features={domAnimation} strict>
      <Work variants={pageAnim} initial="hidden" animate="show" exit="exit">
        <h1>Projects</h1>
        <UseScroll>
          {waves3 && (
            <Project>
              <h2>Waves</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/waves">
                <img src={waves3} alt="waves screenshot" />
              </Link>
            </Project>
          )}
        </UseScroll>
        <UseScroll>
          {foragr && (
            <Project>
              <h2>Foragr</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/foragr">
                <img src={foragr} alt="foragr homepage" />
              </Link>
            </Project>
          )}
        </UseScroll>
        <UseScroll>
          {melisande1 && (
            <Project>
              <h2>Melisande Yoga</h2>
              <m.div
                variants={lineAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="line"
              ></m.div>
              <Link to="/work/melisandeyoga">
                <img src={melisande1} alt="melisande yoga" />
              </Link>
            </Project>
          )}
        </UseScroll>
      </Work>
    </LazyMotion>
  );
};

const Work = styled(m.div)`
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

const Project = styled(m.div)`
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

export default OurWork;
