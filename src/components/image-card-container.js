import React, { Component } from 'react';
import styled from 'styled-components';
import { FaBuilding, FaThumbsUp, FaUser } from 'react-icons/fa';
import { Link } from 'gatsby';
import ImageCard from './image-card';

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  margin: 1em 1em;
  justify-content: center;

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
  zIndex: 3,
};

export default class ImageCardContainer extends Component {
  render() {
    const imageData = this.props.data.cardOne.childImageSharp.fluid;
    const imageData2 = this.props.data.cardTwo.childImageSharp.fluid;
    const imageData3 = this.props.data.cardThree.childImageSharp.fluid;
    return (
      <Container>
        <Link to='/join'>
          <ImageCard
            imageData={imageData}
            mainText='Get Social'
            text='Individual'
            icon={<FaUser style={iconStyle} color='teal' size='3em' />}
          />
        </Link>
        <Link to='/join'>
          <ImageCard
            imageData={imageData2}
            mainText='Volunteer'
            text='Company'
            icon={<FaBuilding style={iconStyle} color='teal' size='3em' />}
          />
        </Link>
        <Link to='/join'>
          <ImageCard
            imageData={imageData3}
            mainText='Real Connections'
            text='Sponsor'
            icon={<FaThumbsUp style={iconStyle} color='teal' size='3em' />}
          />
        </Link>
      </Container>
    );
  }
}
