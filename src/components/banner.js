import React, { Component } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import posed from 'react-pose';
import Img from 'gatsby-image';

const AnimateContainer = posed.div({
  first: {
    opacity: 0,
  },
  second: {
    opacity: 1,
    delay: 500,
  },
});

const AnimateText = posed.div({
  first: {
    opacity: 0,
    y: -50,
  },
  second: {
    opacity: 1,
    delay: 1000,
    y: 0,
  },
});

const Container = styled(AnimateContainer)`
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
`;

const InnerContainer = styled(AnimateText)`
  height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LargeText = styled.h1`
  color: white;
  font-size: 5em;

  @media (max-width: 600px) {
    font-size: 4em;
    padding: 0em .5em;

  }
`;

const Text = styled.h1`
  color: white;
  font-size: 2em;
  padding: 0em 3.5em;
  @media (max-width: 600px) {
    font-size: 1.5em;
    padding: 0em 1.5em;

  }
`;

export default class Banner extends Component {
  render() {
    const imageData = this.props.data.imageTwo.childImageSharp.fluid;
    return (
      <BackgroundImage
        Tag='section'
        className='test'
        fluid={imageData}
        backgroundColor='#040e18'
        style={{
          backgroundPosition: this.props.backgroundPosition,
        }}
      >
        <Container initialPose='first' pose='second'>
          <InnerContainer initialPose='first' pose='second'>
            <LargeText>You Were Meant For More</LargeText>
            <Text>
              Through member talks, discussion groups, volunteering, and social events, we provide purposeful activities
              and conversations to inspire, support and motivate young adults in all areas of their lives
            </Text>
          </InnerContainer>
        </Container>
      </BackgroundImage>
    );
  }
}
