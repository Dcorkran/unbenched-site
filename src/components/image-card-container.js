import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { FaBeer } from 'react-icons/fa';
import ImageCard from './image-card';

const Container = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  margin: 1em 1em;
  justify-content: space-around;

  /* @media only screen and (min-width: 767px) {
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
  } */
`;

const HeroText = styled.h1`
  font-size: 2.5em;
  flex-grow: 2;
  z-index: 2;
`;

const OuterContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 2em 0em;
  align-items: center;
  position: relative;
`;

const Bubble = styled.div`
  border-radius: 50%;
  background-color: #f5f5f5;
  height: 6em;
  width: 6em;
  top: -30px;
  position: absolute;
  z-index: 1;
`;

const iconStyle = {
  height: '30%',
};

export default class ImageCardContainer extends PureComponent {
  render() {
    return (
      <OuterContainer>
        <Bubble />
        <HeroText>Don't Wait For Tomorrow!</HeroText>
        <Container>
          <ImageCard
            mainText='Get Social'
            text='Meet cool people and do fun activites together.'
            icon={<FaBeer style={iconStyle} color='teal' size='3em' />}
          />
          <ImageCard
            mainText='Volunteer'
            text='Give back to your community. It’s a human thing.'
            icon={<FaBeer style={iconStyle} color='teal' size='3em' />}
          />
          <ImageCard
            mainText='Real Connections'
            text='We go beyond surface level friendships'
            icon={<FaBeer style={iconStyle} color='teal' size='3em' />}
          />
        </Container>
      </OuterContainer>
    );
  }
}
