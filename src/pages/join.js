import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Page from '../components/page';
import BenchContainer from '../components/bench-container';
import ImageBanner from '../components/image-banner';
import BubbleContainer from '../components/bubble-container';
import IndividualMembership from '../components/individual-membership';
import CompanyMembership from '../components/company-membership';
import JoinBanner from '../components/join-banner';
import Quote from '../components/quote';

const JoinPage = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          mountains {
            title
            elevation
          }
        }
        cardOne: file(relativePath: { eq: "image-card-individual.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cardTwo: file(relativePath: { eq: "image-card-business.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cardThree: file(relativePath: { eq: "image-card-sponsor.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        benchIcon: file(relativePath: { eq: "bench.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        unbenched1: file(relativePath: { eq: "unbenched-1.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        individualMembership: file(relativePath: { eq: "individual-membership.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        commitment: file(relativePath: { eq: "commitment.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        companyJoin: file(relativePath: { eq: "company-join-banner.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        company1: file(relativePath: { eq: "company-1.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        company2: file(relativePath: { eq: "company-2.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        company3: file(relativePath: { eq: "company-3.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Page>
        <SEO title='Join' />
        <JoinBanner data={data} backgroundPosition='center' />
        <Quote
          color='coral'
          text='“Remember that the happiest people are not those getting more, but those giving more.” ― H. Jackson Brown Jr.'
        />
        <BubbleContainer backgroundColor=''>
          <BenchContainer data={data} />
        </BubbleContainer>
        <BubbleContainer noPadding backgroundColor='#f88379'>
          <Quote color='coral' text='Individual Membership' />
        </BubbleContainer>
        <BubbleContainer backgroundColor='#f5f5f5'>
          <ImageBanner
            mainText='Join Our Unbenched Team'
            secondaryText='The Best Decision You’ll Ever Make'
            textContent='Unbenched is a strong community that empowers each member to be well rounded and a stronger individual. We
          believe in the power of the whole self and push each other to get off the bench, to get stronger each day
          and to become more secure in ourselves in order to live a balanced, fulfilling life.'
            textContent2='We host socials, volunteering events and community nights. At our Community Nights, we start off with games,
          but finish with a member telling their story or thoughts on a topic of their choice, followed by discussion
          groups. We create a safe environment where it is okay to be vulnerable. We balance games and laughter with
          real connections, self-awareness and self-improvement.'
            imgData={data.unbenched1.childImageSharp.fluid}
          />
        </BubbleContainer>
        <BubbleContainer backgroundColor=''>
          <IndividualMembership data={data} />
        </BubbleContainer>
        <BubbleContainer noPadding backgroundColor='#f88379'>
          <Quote color='coral' text='Company Join' />
        </BubbleContainer>
        <BubbleContainer backgroundColor='#f5f5f5'>
          <ImageBanner
            mainText='Invest in Your Employees Well-being'
            secondaryText='Unbenched can help give your employees the confidence they need to perform well at work.'
            textContent='A free gym membership and yoga classes at lunch aren’t going to cut it.'
            textContent2='Employees need high well-being for high performance. Give your employees an opportunity to learn the skills they need to communicate, become self-aware of their strengths and weaknesses, learn from their peers and have fun. Work-life balance? You have one life. What is going on outside of work, affects how you perform inside of work and vice versa. It’s time for employers to show how much they care about their employees and make an even bigger impact.'
            imgData={data.companyJoin.childImageSharp.fluid}
          />
        </BubbleContainer>
        <BubbleContainer backgroundColor=''>
          <CompanyMembership data={data} />
        </BubbleContainer>
      </Page>
    )}
  />
);

export default JoinPage;
