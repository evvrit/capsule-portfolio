import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { projectState } from "../projectState";
// Animations
import { motion } from "framer-motion";
import { pageAnim } from "../animation";
import StackSection from "../components/StackSection";
// Link
import { Link } from "react-router-dom";

const Project = () => {
  const url = useLocation();
  const [projects, setProjects] = useState(projectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url.pathname
    );
    if (currentProject[0]) {
      setProject(currentProject[0]);
    }
  }, [projects, url]);

  return (
    <>
      {project && (
        <StyledProject
          variants={pageAnim}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Banner>
            <h2>{project.title}</h2>
            <img src={project.mainImg} alt={project.mainImgAlt} />
          </Banner>
          <Buttons>
            <a target="_blank" rel="noreferrer" href={project.siteLink}>
              View live project
            </a>
            {project.repoLink && (
              <a target="_blank" rel="noreferrer" href={project.repoLink}>
                Visit repository
              </a>
            )}
          </Buttons>
          <StackSection
            technologies={project.technologies}
            railsInclude={project.railsInclude}
            herokuInclude={project.herokuInclude}
          />
          <ImageDisplay>
            <img src={project.secondaryImg} alt={project.secondaryImgAlt} />
          </ImageDisplay>
          <Details>
            {project.details.map((detail) => (
              <Detail
                title={detail.title}
                description={detail.description}
                key={detail.title}
              />
            ))}
          </Details>
        </StyledProject>
      )}
      ;
    </>
  );
};

const StyledProject = styled(motion.div)`
  color: white;
  margin: 5rem 10rem;
`;

const Banner = styled.div`
  min-height: 60vh;
  padding-top: 0vh;
  position: relative;
  h2 {
    margin-left: 5rem;
    padding-bottom: 2rem;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ImageDisplay = styled.div`
  min-height: 90vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  min-height: 80vh;
  margin: 10rem 0rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const DetailStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 10rem 4rem;
  a {
    justify-content: space-around;
    text-align: center;
    width: 80%;
    font-weight: bold;
    margin: 1rem;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 1rem 3rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
`;

// Award Component

const Detail = ({ title, description }) => {
  return (
    <DetailStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </DetailStyle>
  );
};

export default Project;
