import * as React from 'react';
import { hydrate, render } from 'react-dom';
import Website from './Website';
import * as ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';
import * as Debug from 'debug';

const debug = Debug('App:index');

if (true || process.env.NODE_ENV === 'production') {
  debug('Initializing GA');
  ReactGA.initialize('UA-108008469-1', {
    debug: false
  });
}

const rootElement = document.getElementById('root') as HTMLElement;

const App = () => (
  <BrowserRouter>
    <Website />
  </BrowserRouter>
);

if (rootElement !== null && rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
