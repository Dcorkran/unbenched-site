import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #e1e2e4;
  text-align: center;
  height: 15em;
  margin: 2em auto;
  width: 22%;
  min-width: 15em;
  @media only screen and (max-width: 767px) {
    width: 40%;
  }
`;

const LargeText = styled.h1`
  margin: auto;
  height: 10%;
`;

const Text = styled.h2`
  height: 30%;
  margin: auto 1em;
`;

export default class Card extends Component {
  render() {
    const { mainText, text, icon } = this.props;
    console.log(icon);
    return (
      <Container>
        {icon}
        <LargeText>{mainText}</LargeText>
        <Text>{text}</Text>
      </Container>
    );
  }
}
