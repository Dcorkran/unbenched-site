// import React from 'react';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Page from '../components/page';
import CardContainer from '../components/card-container';
import ImageCardContainer from '../components/image-card-container';


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
import React, { Component }  from 'react';

import Video from '../components/video'
import { graphql, Link, StaticQuery } from "gatsby"
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
      }
    `}
    render={data => (
      <Page>
        <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
        <Banner />
        <Quote />
        <CardContainer />
        <ImageCardContainer />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
          <Image />
        <Link to='/page-2/'>Go to page 2</Link>
        </div>
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
)

export default IndexPage