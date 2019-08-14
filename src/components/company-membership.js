import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import Img from 'gatsby-image';
import CompanyForm from './company-form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 1em 0;
  width: 80%;
  max-width: 80em;
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
  margin-top: 1em;
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
  width: 30%;
  min-width: 25em;
  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 1em 0em;
  }
`;

class CompanyMembership extends PureComponent {
  render() {
    const imgData1 = this.props.data.company1.childImageSharp.fluid;
    const imgData2 = this.props.data.company2.childImageSharp.fluid;
    const imgData3 = this.props.data.company3.childImageSharp.fluid;
    return (
      <Container>
        <TextContainer>
          <TextMain>3 Ways To Get Involved</TextMain>
        </TextContainer>
        <ImageContainer>
          <InnerImgContainer>
            <Img fluid={imgData1} />
          </InnerImgContainer>
          <InnerImgContainer>
            <Img fluid={imgData2} />
          </InnerImgContainer>
          <InnerImgContainer>
            <Img fluid={imgData3} />
          </InnerImgContainer>
        </ImageContainer>
        <CompanyForm />
      </Container>
    );
  }
}

export default withTheme(CompanyMembership);
