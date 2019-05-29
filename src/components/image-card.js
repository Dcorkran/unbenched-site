import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  height: 14em;
  margin: 2em auto;
  width: 30%;
  min-width: 15em;
  background-color: green;
`;

const InnerContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 30%;
`;

const LargeText = styled.h1`
  margin: auto;
  height: 10%;
`;

const Text = styled.h2`
  height: 30%;
  margin: auto 1em;
`;

export default class ImageCard extends Component {
  render() {
    const { mainText, text, icon } = this.props;
    console.log(icon);
    return (
      <Container>
        <InnerContainer>
          Test
        </InnerContainer>
        {/* {icon}
        <LargeText>{mainText}</LargeText>
        <Text>{text}</Text> */}

      </Container>
    );
  }
}
