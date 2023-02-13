import React from "react";
// Icons
import heroku from "../images/heroku.svg";
import rails from "../images/rails.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faSquareGithub,
  faFigma,
  faReact,
  faSass,
  faJs,
  faPython,
  faWordpress,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
// Import styles
import styled from "styled-components";
import { Section, Description } from "../styles";
// Animations
import UseScroll from "./UseScroll";

const ServicesSection = () => {
  return (
    <UseScroll>
      <Services>
        <Description>
          <h2>Tech stack</h2>
          <Cards>
            <Card>
              <div className="icon">
                <img width="50" height="50" src={rails} alt="ruby on rails" />
                <h3>Ruby on Rails</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
                <h3>React</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <img width="34" height="34" src={heroku} alt="heroku" />
                <h3>Heroku</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faGit} />
                <h3>Git</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faFigma} />
                <h3>Figma</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faSass} />
                <h3>SCSS</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faJs} />
                <h3>Javascript</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faSquareGithub} />
                <h3>Github</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faWordpress} />
                <h3>Wordpress</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faPython} />
                <h3>Python</h3>
              </div>
            </Card>
            <Card>
              <div className="icon">
                <FontAwesomeIcon icon={faHtml5} />
                <h3>HTML5</h3>
              </div>
            </Card>
          </Cards>
        </Description>
      </Services>
    </UseScroll>
  );
};

const Services = styled(Section)`
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1300px) {
    justify-content: space-around;
  }
`;

const Card = styled.div`
  justify-content: center;
  padding: 2rem;
  margin: 0;
  .icon {
    flex-basis: 15rem;
    display: flex;
    align-items: center;
    svg,
    img {
      color: #23d997;
    }
    h3 {
      padding: 1rem;
    }
  }
  @media (max-width: 1300px) {
    padding: 1rem;
    .icon {
      flex-basis: 10rem;
    }
    svg,
    img {
      scale: 0.6;
    }
  }
`;

export default ServicesSection;
