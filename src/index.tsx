import * as React from 'react';
import { hydrate, render } from 'react-dom';
import Website from './Website';
// import * as ReactGA from 'react-ga';
import { BrowserRouter } from 'react-router-dom';

// if (process.env.NODE_ENV === 'production') {
//   ReactGA.initialize('UA-108008469-1');
// }

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
