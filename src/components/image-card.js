import React, { Component } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import posed, { PoseGroup } from 'react-pose';

import 'react-awesome-button/dist/styles.css';

import { AwesomeButton } from 'react-awesome-button';

const InnerContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 40%;
  /* transition: height 0.15s ease-out; */
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  /* transition: height 0.25s ease-out 0.25s; */
`;
const ImageContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  /* transition: height 0.25s ease-out 0.25s; */
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
  /* max-width: 28em; */
  /* width: 20%;
  min-width: 18em;
  max-width: 25em;
  min-width: 25em; */
  cursor: pointer;

  /* &:hover ${InnerContainer} {
    height: 70%;
  }
  &:hover ${ImageContainer} {
    height: 30%;
  } */
  /* background-color: green; */
`;

const AnimatedTextContainer = posed.div({
  isNotHovered: {
    height: '40%',
    transition: { duration: 400, ease: 'linear' },

    flip: true,
  },
  isHovered: {
    height: '80%',
    transition: { duration: 400, ease: 'linear' },

    flip: true,
  },
});

const AnimatedImageContainer = posed.div({
  isNotHovered: {
    height: '60%',
    transition: { duration: 400, ease: 'linear' },

    flip: true,
  },
  isHovered: {
    height: '20%',
    transition: { duration: 400, ease: 'linear' },

    flip: true,
  },
});

const LargeText = styled.h1`
  margin: auto;
  height: 10%;
`;

const StlyedImg = styled(Img)`
  height: 100%;
  width: 100%;
`;

const Text = styled.h1`
  /* height: 30%; */
  margin: 10px;
  /* z-index: 3; */
`;

const OuterContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 2em 0em;
  align-items: center;
  position: relative;
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

// const config = {
//   enter: { y: 0, opacity: 1, delay: 500 },
//   exit: { y: 0, opacity: 0 }
// }
const StyledButton = styled(AwesomeButton)`
  margin-top: 2em !important;
`;
const AnimatedButton = posed(StyledButton)({
  enter: { y: 0, opacity: 1, delay: 500 },
  exit: { y: 0, opacity: 0 },
});

// const Button = styled.button`

// `

export default class ImageCard extends Component {
  state = {
    hovered: false,
  };

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
