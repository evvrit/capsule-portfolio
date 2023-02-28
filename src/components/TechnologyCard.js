import React from "react";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// styles
import { Card } from "../styles";

const TechnologyCard = ({ icon, name }) => {
  return (
    <Card>
      <div className="icon">
        <FontAwesomeIcon icon={icon} />
        <h3>{name}</h3>
      </div>
    </Card>
  );
};

export default TechnologyCard;
