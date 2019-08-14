import React, { PureComponent } from 'react';
import styled, { withTheme } from 'styled-components';
import { FaMicrophone, FaUserFriends, FaGlassCheers, FaHandHoldingHeart } from 'react-icons/fa';
import Card from './card';

const Container = styled.div`

  @media only screen and (min-width: 767px) {
    width: auto;
    display: flex;
    align-items: center;
    margin: 1em 1em;
    justify-content: space-around;
  }
  @media only screen and (max-width: 1050px) {
    flex-wrap: wrap;
    width: auto;
    display: flex;
    align-items: center;
    margin: 1em 1em;
    justify-content: center;
  }
`;

const iconStyle = {
  'margin-top': '1em',
};

class CardContainer extends PureComponent {
  render() {
    const { theme } = this.props;
    const { teal } = theme;
    return (
      <Container>
        <Card
          mainText='Get Social'
          text='Meet cool people and do fun activites together.'
          icon={<FaGlassCheers style={iconStyle} color={teal} size='5em' />}
        />
        <Card
          mainText='Volunteer'
          text='Give back to your community. It’s a human thing.'
          icon={<FaHandHoldingHeart style={iconStyle} color={teal} size='5em' />}
        />
        <Card
          mainText='Real Connections'
          text='We go beyond surface level friendships'
          icon={<FaUserFriends style={iconStyle} color={teal} size='5em' />}
        />
        <Card
          mainText='Speakers'
          text='Our speakers are our members. Hear real stories from people you know'
          icon={<FaMicrophone style={iconStyle} color={teal} size='5em' />}
        />
      </Container>
    );
  }
}

export default withTheme(CardContainer);
