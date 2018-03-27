import * as React from 'react';
import * as ReactGA from 'react-ga';
const debug = require('debug')('App:withPageView');

const withPageView = (PageViewComponent, path: string) => {
  return class extends React.Component {
    componentDidMount() {
      debug(`path: ${path}`);
      ReactGA.pageview(path);
    }

    render() {
      return <PageViewComponent {...this.props} />;
    }
  };
};

export default withPageView;
