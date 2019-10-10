import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  width: 95%;
  max-width: ${props => (props.condensed ? '80em' : null)};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4em 1em;
  justify-content: space-around;
`;

const TextContainer = styled.div`
  margin-bottom: 1em;
  width: 70%;
  text-align: center;
`;

const ImageContainer = styled.div`
  width: 45%
  height: inherit;
  @media (max-width: 800px) {
    display: none;
  }
`;

const TextMain = styled.h1`
  font-size: 2em;
`;

class SponsorPerks extends PureComponent {
  render() {
    const { condensed, hasLink, imgData, mainText, secondaryText, textContent, textContent2 } = this.props;
    return (
      <Container condensed={condensed}>
        <TextContainer>
          <TextMain>{mainText}</TextMain>
        </TextContainer>
        <ImageContainer>
          <Img fluid={imgData} style={{ width: '100%', height: '100%' }} />
        </ImageContainer>
      </Container>
    );
  }
}

export default withTheme(SponsorPerks);
