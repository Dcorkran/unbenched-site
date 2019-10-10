import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SEO from "../components/seo";
import Page from "../components/page";
import CompanyForm from "../components/company-form";
import SponsorBanner from "../components/sponsor-banner";
import BubbleContainer from "../components/bubble-container";
import Quote from "../components/quote";
import ImageBanner from "../components/image-banner";
import SponsorPerks from "../components/sponsor-perks";
import styled from "styled-components";
import Img from "gatsby-image";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin: 1em 0;
  width: 80%;
  max-width: 60em;
`;

const TextMain = styled.h1`
  font-size: 3em;
  margin: 1em 0;
`;

const TextSecondary = styled.h2`
  font-size: 1.5em;
  color: salmon;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin: 2em 0;
`;

const SponsorsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        sponsorBanner: file(relativePath: { eq: "sponsor-banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        farNorthLogo: file(relativePath: { eq: "far-north-logo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        titosLogo: file(relativePath: { eq: "titos-logo.png" }) {
          childImageSharp {
            fixed(width: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        sponsorPerks: file(relativePath: { eq: "sponsor-perks.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Page>
        <SEO title="Sponsors" />
        <SponsorBanner
          data={data}
          backgroundPosition="center"
          imgData={data.sponsorBanner.childImageSharp.fluid}
        />
        <Quote text='"To overcome our challenges, all that is required is the courage to ask for help" - Simon Sinek' />
        <BubbleContainer>
          <TextContainer>
            <TextMain>
              Our signature Community Nights fill the hearts and minds of young
              adults looking to better themselves and it is all possible because
              of our sponsors.
            </TextMain>
            <TextSecondary>
              Love what we stand for and want to help us change the way we see
              community? Help us hold our events and contribute to bettering the
              lives of young adults.
            </TextSecondary>
          </TextContainer>
        </BubbleContainer>

        <BubbleContainer heroText="Thank You GOLD SPONSORS!">
          <ImageBanner
            condensed
            hasLink
            mainText="Far North Construction"
            margin="1em 1em"
            secondaryText="https://farnorthconstruction.com"
            textContent="They’re different from most General Contractors in Denver, because they build business dreams. Whether it’s a franchise, a restaurant, or medical practice, you have a dream for your business, and they know how to create the space that will allow you to communicate your passion to your customers. They love supporting the community they live and work in!"
            imgData={data.farNorthLogo.childImageSharp.fluid}
          />
        </BubbleContainer>
        <BubbleContainer heroText="Thank You Community Sponsors!">
          <ImageContainer>
            <Img fixed={data.titosLogo.childImageSharp.fixed} />
          </ImageContainer>
        </BubbleContainer>
        <BubbleContainer noPadding backgroundColor="#f88379">
          <Quote
            text="Ready to help change the way young adults see community?"
            color="coral"
          />
        </BubbleContainer>
        <BubbleContainer backgroundColor="#f5f5f5">
          <SponsorPerks
            condensed
            mainText="Sponsoring Unbenched gives you a unique opportunity to share your business with young leaders in your community. Sponsorships include the following exposure:"
            imgData={data.sponsorPerks.childImageSharp.fluid}
          />
          <CompanyForm />
        </BubbleContainer>
      </Page>
    )}
  />
);

export default SponsorsPage;
