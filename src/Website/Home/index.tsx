import * as React from 'react';
import './Home.css';

const video = require('./static/earth.mp4');
const poster = require('./static/earth.png');

const Home = () => (
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
export default Home;
