import React from "react";
// Icons
import clock from "../images/clock.svg";
import money from "../images/money.svg";
import teamwork from "../images/teamwork.svg";
import home2 from "../images/home2.png";
// Import styles
import styled from "styled-components";
import { Section, Description, Image } from "../styles";
// Animations
import UseScroll from "./UseScroll";

const ServicesSection = () => {
  return (
    <UseScroll>
      <Services>
        <Description>
          <h2>
            High <span>quality</span> service
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} alt="clock" />
                <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="teamwork" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="money" />
                <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>
        <Image>
          <img src={home2} alt="camera on a tripod" />
        </Image>
      </Services>
    </UseScroll>
  );
};

const Services = styled(Section)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: space-around;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    img {
      @media (max-width: 1300px) {
        scale: 0.6;
      }
    }
    h3 {
      margin-left: 1rem;
      color: black;
      background: white;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
