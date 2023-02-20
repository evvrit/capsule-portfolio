import React from "react";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
// styles
import styled from "styled-components";

const TechnologyCard = ({ icon, name }) => {
  return (
    <Card>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
        <p>{icon}</p>
        <h3>{name}</h3>
      </div>
    </Card>
  );
};

export default TechnologyCard;

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
