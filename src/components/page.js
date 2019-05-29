import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './header';
// import Meta from './meta';
import Video from './video';


const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  teal: '#13DEB6',
  salmon: '#ff6d68',
  blue: '#55a4ff',
  // maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  /* padding: 2rem; */
`;

const GlobalStyle = createGlobalStyle`
  /* @font-face {
    font-family: 'Open Sans Condensed', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  html {
    box-sizing: border-box;
    font-size: .5rem;
    padding: 0;
    margin: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    /* font-family: 'Open Sans Condensed'; */
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  /* button {  font-family: 'Open Sans Condensed'; } */
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyle />
          <Header />
          {/* <Video /> */}
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
