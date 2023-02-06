import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="/">
          Capsule
        </a>
      </h1>
      <ul>
        <li>
          <a href="/about">1. About Us</a>
        </li>
        <li>
          <a href="/work">2. Our Work</a>
        </li>
        <li>
          <a href="/contact">3. Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 10rem;
      position: relative;
    }
  }
  #logo {
    font-size: 1.2rem;
    font-family: "Unbounded", cursive;
    font-weight: lighter;
  }
`;
export default Nav;
