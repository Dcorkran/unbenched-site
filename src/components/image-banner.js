import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  margin: 4em 1em;
  justify-content: space-around;
`;

const TextContainer = styled.div`
  width: 55%;
`;

const ImageContainer = styled.div`
  width: 35%
  height: 25em;
  @media (max-width: 800px) {
    display: none;
  }
`;

const TextMain = styled.h1`
  font-size: 3em;
`;

const TextSecondary = styled.h2`
  font-size: 1.5em;
  color: salmon;
`;

const TextContent = styled.h2`
  font-size: 1.5em;
`;

class ImageBanner extends PureComponent {
  render() {
    const { imgData, mainText, secondaryText, textContent, textContent2 } = this.props;
    return (
      <Container>
        <TextContainer>
          <TextMain>{mainText}</TextMain>
          <TextSecondary>{secondaryText}</TextSecondary>
          <TextContent>{textContent}</TextContent>
          <TextContent>{textContent2}</TextContent>
        </TextContainer>
        <ImageContainer>
          <Img fluid={imgData} style={{ width: '100%', height: '100%' }} />
        </ImageContainer>
      </Container>
    );
  }
}

export default withTheme(ImageBanner);
