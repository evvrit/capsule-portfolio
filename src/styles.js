import styled from "styled-components";

export const Button = styled.a`
  padding: 1rem;
  margin: 2rem;
  text-decoration: none;
  color: white;
  border: 2px solid white;
  background: transparent;
  opacity: 0.8;
  font-size: 1.6rem;
  transition: all 0.4s ease;
  &:hover {
    background-color: white;
    color: black;
    opacity: 1;
  }
`;

export const Card = styled.div`
  justify-content: center;
  padding: 2rem;
  margin: 1rem;
  width: 15%;
  .icon {
    display: flex;
    align-items: center;
    svg,
    img {
      color: #23d997;
    }
    h3 {
      padding-left: 2rem;
    }
  }
  @media (max-width: 1100px) {
    padding: 1rem;
    width: 20%;

    .icon {
      flex-basis: 10rem;
    }
    svg,
    img {
      scale: 0.6;
    }
  }
  @media (max-width: 700px) {
    padding: 0.5rem;
    width: fit-content;
    .icon {
      svg,
      img {
        width: 2rem;
      }
      h3 {
        font-size: 1rem;
        padding-left: 1rem;
      }
    }
  }
`;

export const Description = styled.div`
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Section = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  h2 {
    font-size: 4rem;
  }
  @media (max-width: 1300px) {
    padding: 2rem 6rem;
    margin-top: 2rem;
    text-align: center;
  }
  @media (max-width: 900px) {
    padding: 2rem 2rem;
    text-align: center;
  }
`;
