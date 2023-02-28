import React from "react";
import TechnologyCard from "./TechnologyCard";
// SVGs
import heroku from "../images/heroku.svg";
import rails from "../images/rails.svg";
// Import styles
import styled from "styled-components";
import { Section, Description } from "../styles";
// Animations
import UseScroll from "./UseScroll";

const StackSection = ({ technologies }) => {
  return (
    <UseScroll>
      <TechStack>
        <Description>
          <h2>Tech stack</h2>
          <Cards>
            {technologies.map((technology) => (
              <TechnologyCard icon={technology.icon} name={technology.name} />
            ))}
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
      </TechStack>
    </UseScroll>
  );
};

const TechStack = styled(Section)`
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

export default StackSection;
