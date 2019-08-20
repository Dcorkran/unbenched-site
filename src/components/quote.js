import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => (props.color ? props.theme[props.color] : props.theme.teal)};
  min-height: 15em;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;

const LargeText = styled.h1`
  color: black;
  margin: 0;
  text-align: center;
  font-size: 2em;
  margin: 0 2em;
  line-height: 1.5;
  z-index: 3;
`;

const SmallText = styled.h2`
  color: black;
  margin: 0;
  text-align: center;
  font-size: 1.5em;
  line-height: 1.5;
`;

const Text = styled.h1`
  color: white;
`;

export default class Quote extends PureComponent {
  render() {
    const { color, text, smallText, ref } = this.props;
    return (
      <Container color={color} ref={ref}>
        <LargeText>{text}</LargeText>
        {smallText && <SmallText>{smallText}</SmallText>}
      </Container>
    );
  }
}
