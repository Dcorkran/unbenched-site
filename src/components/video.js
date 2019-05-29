import React, { Component } from 'react';

import styled from 'styled-components';
import ReactPlayer from 'react-player';

// export default class Video extends Component {
//   render() {
//     return <ReactPlayer url='https://www.dailymotion.com/video/x5e9eog' playing muted width='auto'/>;
//   }
// }
import './layout.css';

// const Wrapper = styled.div`
//   position: relative;
//   padding-top: 25%;
// `;

// const styles2 = {position}

// const Player = styled.ReactPlayer`
//   position: absolute;
//   top: 0;
//   left: 0;
// `;

// const styleTest = { position: 'absolute', top: '0', left: '6969' };

export default class video extends Component {
  render() {
    return (
      <div className='test'>
        <div className='player-wrapper'>
          <ReactPlayer
            // styles={styleTest}
            playing
            muted
            className='react-player'
            url='https://www.dailymotion.com/video/x5e9eog'
            width='100%'
            height='100%'
          />
        </div>
      </div>
    );
  }
}
