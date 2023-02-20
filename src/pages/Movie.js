import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { movieState } from "../movieState";
// Animations
import { motion } from "framer-motion";
import { pageAnim } from "../animation";
import ServicesSection from "../components/ServicesSection";

const Movie = () => {
  const url = useLocation();
  const [movies, setMovies] = useState(movieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter(
      (stateMovie) => stateMovie.url === url.pathname
    );
    if (currentMovie[0]) setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledMovie
          variants={pageAnim}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Banner>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.mainImgAlt} />
          </Banner>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <Buttons>
            <button>View live project</button>
            <button>Visit repository</button>
          </Buttons>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt={movie.secondaryImgAlt} />
          </ImageDisplay>
          <ServicesSection></ServicesSection>
        </StyledMovie>
      )}
      ;
    </>
  );
};

const StyledMovie = styled(motion.div)`
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

const Awards = styled.div`
  min-height: 80vh;
  margin: 10rem 0rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
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
  justify-content: space-around;
  margin: 6rem 10rem;
  button {
    margin: 1rem;
    width: 80%;
  }
`;

// Award Component

const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default Movie;
