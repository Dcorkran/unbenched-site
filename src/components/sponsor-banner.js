import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import Img from 'gatsby-image';
import posed from 'react-pose';

const AnimateContainer = posed.div({
  first: {
    opacity: 0,
  },
  second: {
    opacity: 1,
    delay: 500,
  },
});

const AnimateText = posed.h1({
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
  height: 25em
  position: relative;
  width: 100%;
  z-index: 2;
  background-color: rgba(0,0,0,0.2);
`;

const ImageContainer = styled(Img)`
  display: block;
  width: 100%;
  height: 100%;
`;

const TextMain = styled(AnimateText)`
  color: #fff;
  font-size: 8em;
  text-align: center;
  position: absolute;
  top: 35%;
  width: 100%;
`;

class SponsorBanner extends PureComponent {
  render() {
    const { imgData } = this.props;
    return (
      <Container initialPose='first' pose='second'>
        <ImageContainer fluid={imgData} style={{ opacity: 0.8 }} />
        <TextMain initialPose='first' pose='second'>
          Sponsorships
        </TextMain>
      </Container>
    );
  }
}

export default withTheme(SponsorBanner);
