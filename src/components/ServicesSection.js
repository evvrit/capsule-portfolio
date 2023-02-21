import React from "react";
import TechnologyCard from "../components/TechnologyCard";
// Icons
import heroku from "../images/heroku.svg";
import rails from "../images/rails.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import styles
import styled from "styled-components";
import { Section, Description } from "../styles";
// Animations
import UseScroll from "./UseScroll";

const ServicesSection = () => {
  const technologies = [
    { icon: "react", name: "React" },
    { icon: "git", name: "Git" },
    { icon: "figma", name: "Figma" },
    { icon: "sass", name: "Sass" },
    { icon: "js", name: "Javascript" },
    { icon: "github", name: "Github" },
    { icon: "wordpress", name: "Wordpress" },
    { icon: "python", name: "Python" },
    { icon: "html5", name: "HTML5" },
  ];

  console.log(technologies[0].icon);
  return (
    <UseScroll>
      <Services>
        <Description>
          <h2>Tech stack</h2>
          <Cards>
            {technologies.map((technology) => (
              <TechnologyCard icon={technology.icon} name={technology.name} />
            ))}
            ;
            <TechnologyCard>
              <div className="icon">
                <img width="34" height="34" src={heroku} alt="heroku" />
                <h3>Heroku</h3>
              </div>
            </TechnologyCard>
            <TechnologyCard>
              <div className="icon">
                <img width="34" height="34" src={rails} alt="rails" />
                <h3>Rails</h3>
              </div>
            </TechnologyCard>
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

export default ServicesSection;
