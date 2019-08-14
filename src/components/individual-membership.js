import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import Img from 'gatsby-image';
import Form from './form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 1em 0;
  width: 80%;
  max-width: 60em;
`;

const iconStyle = {
  'margin-top': '1em',
};

const HeaderText = styled.h1`
  z-index: 3;
  font-size: 3em;
  margin-top: 1em;
`;

const FooterText = styled.h1`
  font-size: 3em;
  margin-bottom: 1em;
`;

const TextContainer = styled.div`
  width: 55%;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 4em auto;
  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

const TextMain = styled.h1`
  font-size: 3em;
  margin: 1em 0;
`;

const TextSecondary = styled.h2`
  font-size: 1.5em;
  color: salmon;
`;

const TextContent = styled.h2`
  font-size: 1.5em;
`;

const InnerImgContainer = styled.div`
  height: 100%;
  width: 45%;
  min-width: 25em;
  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 1em 0em;
  }
`;

const CommitImgContainer = styled.div`
  height: 100%;
  width: 45%;
  min-width: 25em;
  .gatsby-image-wrapper {
    top: 40px;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 1em 0em;
    .gatsby-image-wrapper {
      top: 0px;
    }
  }
`;

class IndividualMembership extends PureComponent {
  render() {
    const imgData1 = this.props.data.individualMembership.childImageSharp.fluid;
    const imgData2 = this.props.data.commitment.childImageSharp.fluid;
    return (
      <Container>
        <TextContainer>
          <TextMain>6-Month Individual Memberships</TextMain>
          <TextSecondary>
            If you're needing some extra help or don't have the time to fully commit, we are willing to do a monthly
            plan for $30/month.
          </TextSecondary>
        </TextContainer>
        <ImageContainer>
          <InnerImgContainer>
            <Img fluid={imgData1} style={{}} />
          </InnerImgContainer>
          <CommitImgContainer>
            <Img fluid={imgData2} style={{}} />
          </CommitImgContainer>
        </ImageContainer>
        <Form />
      </Container>
    );
  }
}

export default withTheme(IndividualMembership);
