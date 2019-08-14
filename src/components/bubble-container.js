import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './header';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => (props.noPadding ? '0' : '2em 0')};
  align-items: center;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'white')};
  position: relative;
`;

const Bubble = styled.div`
  border-radius: 50%;
  background-color: inherit;
  height: 6em;
  width: 8em;
  top: -20px;
  position: absolute;
  z-index: 1;
`;

const HeroText = styled.h1`
  font-size: 2.5em;
  flex-grow: 2;
  z-index: 2;
  margin-top: 1em;
`;

const Smile = styled.div`
  position: relative;
  margin: auto;
  /* margin-right: 1rem; */
  height: 2em;
  width: 7em;
  border: solid 0.25em ${props => props.theme.teal};
  border-color: transparent transparent ${props => props.theme.teal} transparent;
  border-radius: 70%;
`;

class BubbleContainer extends Component {
  render() {
    const { backgroundColor, children, heroText, noPadding } = this.props;
    return (
      <OuterContainer noPadding={noPadding} backgroundColor={backgroundColor}>
        <Bubble />
        {heroText && (
          <div>
            <HeroText>{heroText}</HeroText>
            <Smile />
          </div>
        )}

        {children}
      </OuterContainer>
    );
  }
}

export default BubbleContainer;
