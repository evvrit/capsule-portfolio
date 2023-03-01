import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    font-size: 4rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    margin-top: 4rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Button = styled.a`
  padding: 1rem;
  text-decoration: none;
  color: black;
  background-color: white;
  opacity: 0.8;
  border-radius: 1rem;
  font-size: 1.6rem;
  transition: opacity 0.5s ease;
  &:hover {
    opacity: 1;
  }
`;

export const Card = styled.div`
  justify-content: center;
  padding: 2rem;
  margin: 1rem;
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
