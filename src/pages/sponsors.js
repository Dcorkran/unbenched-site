import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Page from '../components/page';
import BenchContainer from '../components/bench-container';
import SponsorBanner from '../components/sponsor-banner';
import BubbleContainer from '../components/bubble-container';
import IndividualMembership from '../components/individual-membership';
import CompanyMembership from '../components/company-membership';
import JoinBanner from '../components/join-banner';
import Quote from '../components/quote';

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
      }
    `}
    render={data => (
      <Page>
        <SEO title='Sponsors' />
        <SponsorBanner data={data} backgroundPosition='center'
        imgData={data.sponsorBanner.childImageSharp.fluid}
        
        />
      </Page>
    )}
  />
);

export default SponsorsPage;
