import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import { FaBeer } from 'react-icons/fa';
import Card from './card';

const Container = styled.div`
  flex-grow: 2;

  @media only screen and (min-width: 767px) {
    width: auto;
    display: flex;
    align-items: center;
    margin: 1em 1em;
    justify-content: space-around;
  }
  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    width: auto;
    display: flex;
    align-items: center;
    margin: 1em 1em;
    justify-content: space-around;
  }
`;

const HeroText = styled.h1`
  font-size: 2.5em;
  flex-grow: 2;
  z-index: 2;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 0;
  align-items: center;
  position: relative;
`;

const Bubble = styled.div`
  border-radius: 50%;
  background-color: white;
  height: 6em;
  width: 6em;
  top: -30px;
  position: absolute;
  z-index: 1;
`;

const iconStyle = {
  'margin-top': '1em',
  height: '30%',
};

class CardContainer extends PureComponent {
  render() {
    console.log(this.props);
    const { theme } = this.props;
    const { teal } = theme;
    return (
      <OuterContainer>
        <Bubble />
        <HeroText>Why People Need Unbenched</HeroText>
        <Container>
          <Card
            mainText='Get Social'
            text='Meet cool people and do fun activites together.'
            icon={<FaBeer style={iconStyle} color={teal} size='3em' />}
          />
          <Card
            mainText='Volunteer'
            text='Give back to your community. It’s a human thing.'
            icon={<FaBeer style={iconStyle} color={teal} size='3em' />}
          />
          <Card
            mainText='Real Connections'
            text='We go beyond surface level friendships'
            icon={<FaBeer style={iconStyle} color={teal} size='3em' />}
          />
          <Card
            mainText='Speakers'
            text='Our speakers are our members. Hear real stories from people you know'
            icon={<FaBeer style={iconStyle} color={teal} size='3em' />}
          />
        </Container>
      </OuterContainer>
    );
  }
}

export default withTheme(CardContainer);
