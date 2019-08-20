import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import posed from 'react-pose';

import 'react-awesome-button/dist/styles.css';

import { AwesomeButton } from 'react-awesome-button';

const InnerContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;
const ImageContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const AnimatedContainer = posed.div({
  hoverable: true,
  pressable: true,
  init: { scale: 1, boxShadow: '0px 0px 0px rgba(0,0,0,0)' },
  hover: { scale: 1.1, boxShadow: '0px 5px 10px rgba(0,0,0,0.2)' },
  press: { scale: 1.0 },
});

const Container = styled(AnimatedContainer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  height: 16em;
  margin: 2em 1em;
  width: 28em;
  cursor: pointer;
`;

const StlyedImg = styled(Img)`
  height: 100%;
  width: 100%;
`;

const Text = styled.h1`
  margin: 10px;
`;

const Bubble = styled.div`
  border-radius: 50%;
  background-color: inherit;
  height: 7rem;
  width: 7rem;
  top: -20px;
  position: absolute;
  z-index: 0;
`;

export default class ImageCard extends Component {
  render() {
    const { mainText, text, icon, imageData } = this.props;
    return (
      <Container>
        <ImageContainer>
          <StlyedImg fluid={imageData} />
        </ImageContainer>
        <InnerContainer>
          <Bubble />
          {icon}
          <Text>{text}</Text>
        </InnerContainer>
      </Container>
    );
  }
}
