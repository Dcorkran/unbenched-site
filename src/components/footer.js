import React, { Component } from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #2e3133;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CopyContainer = styled.div`
  width: 30%;
  padding-left: 1em;
`;
const HiddenContainer = styled.div`
  width: 30%;
  display: hidden;
`;

const IconContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center
  text-align: center;
  align-items: center;
`;

const CopyText = styled.p`
  color: white;
  margin-bottom: 0;
`;
const Footer = () => (
  <StyledDiv>
    <CopyContainer>
      <CopyText>© Copyright 2018-{new Date().getFullYear()}</CopyText>
    </CopyContainer>
    <IconContainer>
    <a href="https://www.facebook.com/Unbenched1">
      <FaFacebookSquare color='white' size='2em' />
    </a>
    <a href="https://www.instagram.com/unbenched/">
      <FaInstagram color='white' size='2em' />
    </a>
    </IconContainer>
    <HiddenContainer />
  </StyledDiv>
);

export default Footer;
