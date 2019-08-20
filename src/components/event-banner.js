import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import 'react-awesome-button/dist/styles.css';

import { AwesomeButton } from 'react-awesome-button';

import BackgroundImage from 'gatsby-background-image';

const ContainerDiv = styled.div`
  height: 40em;
  display: flex;
  flex-direction: row-reverse;
`;

const InnerContainer = styled.div`
  margin-right: 15%;
  margin-top: 8em;
  margin-bottom: 8em;
  width: 25em;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

const BoldText = styled.h1`
  margin: 0.1em 1em;
  font-size: 2.5em;
`;

const SmallText = styled.h1`
  margin: 0.1em 1em;
  font-size: 1.5em;
  margin-top: 1em;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(AwesomeButton)`
  /* margin-top: 2em !important; */
`;

class EventBanner extends React.Component {
  render() {
    const imageData = this.props.data.imageOne.childImageSharp.fluid;
    return (
      <BackgroundImage Tag='section' className='test' fluid={imageData} backgroundColor='#040e18'>
        <ContainerDiv>
          <InnerContainer>
            <TextContainer>
              <BoldText>Get Off the Bench!</BoldText>
              <SmallText>Join us for community and social nights, volunteer events, and much more.</SmallText>
            </TextContainer>
            <Link to='/join'>
              <StyledButton size='large' ripple type='primary'>
                Don't miss an event!
              </StyledButton>
            </Link>
          </InnerContainer>
        </ContainerDiv>
      </BackgroundImage>
    );
  }
}

const StyledEventBanner = styled(EventBanner)`
  width: 50%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`;

export default StyledEventBanner;

// export const pageQuery = graphql`
//   query HeaderImageQuery {
//     headerImage: imageSharp(id: { regex: "/header/" }) {
//       sizes(maxWidth: 1240 ) {
//         ...GatsbyImageSharpSizes
//       }
//     }
//   }
// `

// export const query = graphql`
// query {
//   file(relativePath: { eq: "header.jpg" }) {
//     childImageSharp {
//       # Specify the image processing specifications right in the query.
//       # Makes it trivial to update as your page's design changes.
//       fluid(maxWidth: 1000) {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }`
