import React from "react";
import TechnologyCard from "./TechnologyCard";
// SVGs
import heroku from "../images/heroku.svg";
import rails from "../images/rails.svg";
// Import styles
import styled from "styled-components";
import { Section, Description, Card } from "../styles";
// Animations
import UseScroll from "./useScroll";

const StackSection = ({ technologies, railsInclude, herokuInclude }) => {
  return (
    <UseScroll>
      <TechStack>
        <Description>
          <h2>Tech stack</h2>
          <Cards>
            {technologies.map((technology, index) => (
              <TechnologyCard
                icon={technology.icon}
                key={index}
                name={technology.name}
              />
            ))}
            {railsInclude ? (
              <Card>
                <div className="icon">
                  <img width="34" height="34" src={rails} alt="rails" />
                  <h3>Rails</h3>
                </div>
              </Card>
            ) : (
              ""
            )}
            {herokuInclude ? (
              <Card>
                <div className="icon">
                  <img width="34" height="34" src={heroku} alt="heroku" />
                  <h3>Heroku</h3>
                </div>
              </Card>
            ) : (
              ""
            )}
          </Cards>
        </Description>
      </TechStack>
    </UseScroll>
  );
};
export default StackSection;

const TechStack = styled(Section)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  h2 {
    padding-bottom: 5rem;
    text-align: center;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-basis: 2rem;
  justify-content: center;
  align-items: center;
  column-gap: 4rem;
  @media (max-width: 700px) {
    column-gap: 1rem;
    justify-content: space-around;
  }
`;
