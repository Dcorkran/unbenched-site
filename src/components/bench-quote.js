import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import posed from 'react-pose';
import Img from 'gatsby-image';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  height: 15em;
  margin: 2em;
  width: 20%;
  min-width: 18em;
  max-width: 25em;
  @media only screen and (max-width: 1050px) {
    width: 40%;
  }
`;

const BenchIconContainer = styled.div`
  width: 5em;
`;

const BenchQuoteText = styled.h1`
  font-size: 1.5em;
`;

export default class BenchQuote extends Component {

  render() {
    const { icon, quote } = this.props;
    return (
      <Container>
        <BenchIconContainer>
          <Img fluid={icon} imgStyle={{color: 'blue'}}/>
        </BenchIconContainer>
        <BenchQuoteText>
          {quote}
        </BenchQuoteText>
      </Container>
    );
  }
}
