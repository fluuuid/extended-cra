import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
storiesOf('Header', module).add('Header', () => (
  <Router>
    <Header />
  </Router>
));
