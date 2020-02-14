import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Routes: React.FC = () => (
  <Router>
    <main>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </main>
  </Router>
);

export default Routes;
