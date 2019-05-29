import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.teal};
  height: 10em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LargeText = styled.h1`
  color: black;
  margin: 0;
  text-align: center;
  font-size: 1.1em;
  margin: 0 2em;
  line-height: 2;
`;

const Text = styled.h1`
  color: white;
`;

export default class Quote extends PureComponent {
  render() {
    return (
      <Container>
        <LargeText> This is a really really cool quote and it's really powerful and you should really care about the quote cuz it's super neat. Dillon is cool - Ghandi</LargeText>
      </Container>
    );
  }
}
