import * as React from 'react';
import './Home.css';
import * as Debug from 'debug';
import gaPageView from '../gaPageView';
const debug = Debug('App:Home');

const video = require('./static/earth.mp4');
const poster = require('./static/earth.png');

@gaPageView('/')
export default class Home extends React.Component {
  render() {
    debug('initialize Home');
    return (
      <div>
        <h1>
          Decentralized<br />Climate Agency
        </h1>
        <div className="earth-video-wrap" style={{ display: 'none' }}>
          <video
            src={video}
            poster={poster}
            className="earth-video"
            preload="auto"
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </div>
        <h2>Unlocking the power of cryptocurrencies to save our planet</h2>
      </div>
    );
  }
}
