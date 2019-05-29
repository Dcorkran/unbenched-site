import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url('https://images.unsplash.com/photo-1463131880619-92e2e9a64ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1832&q=80');
  background-position: center bottom;
  background-size: 100% auto;
  color: ${props => props.theme.black};
  height: 20em;
  display: flex;
  /* width: auto; */
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LargeText = styled.h1`
  color: white;
`;

const Text = styled.h1`
  color: white;
  font-size: 1em;
`;

export default class Banner extends PureComponent {
  render() {
    return (
      <Container>
        <LargeText>You Were Meant For More</LargeText>
        <Text>Text is going to go here once Steph figures out what it's gonna be</Text>
      </Container>
    );
  }
}
