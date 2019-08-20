import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import BenchQuote from './bench-quote';

const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em 1em;
  justify-content: space-around;
`;

const HeaderText = styled.h1`
  z-index: 3;
  font-size: 3em;
  margin-top: 1em;
`;

const FooterText = styled.h1`
  font-size: 3em;
  margin-bottom: 1em;
`;

const InnerBenchContainer = styled.div`
  display: flex;
  @media only screen and (min-width: 767px) {
    width: auto;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    margin: 1em 1em;
    justify-content: space-around;
    width: 60%;
  }
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    width: auto;
    flex-direction: column;
    align-items: center;
    margin: 1em 1em;
    justify-content: center;
  }
`;

class BenchContainer extends PureComponent {
  render() {
    const benchIconData = this.props.data.benchIcon.childImageSharp.fluid;
    return (
      <Container>
        <HeaderText>If You ...</HeaderText>
        <InnerBenchContainer>
          <BenchQuote icon={benchIconData} quote='Are looking for ways to give back to your community' />
          <BenchQuote icon={benchIconData} quote='Are eager to meet new people and form real connections' />
          <BenchQuote icon={benchIconData} quote='Love playing games and social events' />
          <BenchQuote icon={benchIconData} quote='Enjoy learning from other people’s experiences' />
          <BenchQuote icon={benchIconData} quote='Feel stress about handling life on your own' />
          <BenchQuote icon={benchIconData} quote='Want to become more secure in yourself' />
        </InnerBenchContainer>
        <FooterText>... then Unbenched is right for you!</FooterText>
      </Container>
    );
  }
}

export default withTheme(BenchContainer);
