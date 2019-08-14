import React, { Component } from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Page from '../components/page';
import CardContainer from '../components/card-container';
import ImageCardContainer from '../components/image-card-container';
import BubbleContainer from '../components/bubble-container';
import EventBanner from '../components/event-banner';

// const IndexPage = () => (
// <Layout>
//   <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
//   <h1>Hi people</h1>
//   <p>Welcome to your new Gatsby site.</p>
//   <p>Now go build something great.</p>
//   <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
//     <Image />
//   </div>
//   <Link to='/page-2/'>Go to page 2</Link>
// </Layout>
// );

// export default IndexPage;

// import React from "react"

import Video from '../components/video';
import Banner from '../components/banner';
import Quote from '../components/quote';

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          mountains {
            title
            elevation
          }
        }
        imageOne: file(relativePath: { eq: "jump-beach.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageTwo: file(relativePath: { eq: "hero-test.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
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
      }
    `}
    render={data => (
      <Page>
        <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
        <Banner data={data} backgroundPosition='top center' />
        <Quote text='"Alone, we can do so little; together, we can do so much” – Helen Keller' />
        <BubbleContainer backgroundColor='' heroText='Why People Need Unbenched'>
          <CardContainer />
        </BubbleContainer>
        <BubbleContainer backgroundColor='#f5f5f5' heroText='Ways To Get Involved'>
          <ImageCardContainer data={data} />
        </BubbleContainer>
        <BubbleContainer backgroundColor='#13DEB6'>
          <Quote
            smallText='We’re working to change that.'
            text='Cigna released results from a national survey revealing that most American adults are considered lonely, and that the youngest generation of adults is the loneliest of all.'
          />
        </BubbleContainer>
        <EventBanner data={data} />
        {/* <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        <Link to='/page-2/'>Go to page 2</Link>
        </div> */}
      </Page>
      // <div>
      //   <h1>USA Mountains</h1>
      //   <ul>
      //     {data.gcms.mountains.map(mountain => {
      //       const { title, elevation } = mountain
      //       return (
      //         <li>
      //           <strong>{title}:</strong>
      //           {elevation}
      //         </li>
      //       )
      //     })}
      //   </ul>
      // </div>
    )}
  />
);

export default IndexPage;
