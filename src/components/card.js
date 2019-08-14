import React, { Component } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import posed from 'react-pose';

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
});

const Test = posed.h1({
  toggled: {
    opacity: 1,
    delay: 200,
  },
  hidden: {
    opacity: 0,
  },
});

const Test2 = posed.div({
  toggled: {
    y: 0,
    delay: 150,
  },
  hidden: {
    delay: 150,
    y: 30,
  },
});

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #e1e2e4;
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

const LargeText = styled.h1`
  margin: auto;
  font-size: 2em !important;
`;

const Text = styled(Test)`
  height: 30%;
  margin: auto 1em;
`;

export default class Card extends Component {
  state = {
    toggle: false,
  };

  onHover = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    const { mainText, text, icon } = this.props;
    const { toggle } = this.state;
    console.log(this.props);
    return (
      <Container onMouseOver={this.onHover} onMouseOut={this.onHover}>
        <Test2 pose={toggle ? 'toggled' : 'hidden'}>
          {icon}
          <LargeText>{mainText}</LargeText>
        </Test2>
        <Text pose={toggle ? 'toggled' : 'hidden'}>{text}</Text>
      </Container>
    );
  }
}
