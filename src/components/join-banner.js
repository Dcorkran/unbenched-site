import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const AnimateText = posed.div({
  first: {
    opacity: 0,
    y: -50,
  },
  second: {
    opacity: 1,
    delay: 500,
    y: 0,
  },
});

const Container = styled.div`
  height: 20em;
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

const InnerContainer = styled(AnimateText)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LargeText = styled.h1`
  color: black;
  font-size: 3em;
`;

export default class JoinBanner extends Component {
  render() {
    // const imageData = this.props.data.imageTwo.childImageSharp.fluid;
    return (
      <Container initialPose='first' pose='second'>
        <InnerContainer initialPose='first' pose='second'>
          <LargeText>Start Investing in YOU and transform your life.</LargeText>
        </InnerContainer>
      </Container>
    );
  }
}
