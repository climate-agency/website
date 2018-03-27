import * as React from 'react';
import './Home.css';
import * as Debug from 'debug';
import withPageView from '../withPageView';
const debug = Debug('App:Home');

const video = require('./static/earth.mp4');
const poster = require('./static/earth.png');

const Home = () => {
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
};
export default withPageView(Home, '/');
