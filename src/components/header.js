import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import Image from './image';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.22);
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr aut0;
    border-bottom: 10px solid ${props => props.theme.red};
  }
`;

const StyledDiv = styled.div`
  margin: 0.5em;
  width: 15em;
`;

const Header = () => (
  <StyledHeader>
    <div className='bar'>
      <StyledDiv>
        <Image />
      </StyledDiv>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
