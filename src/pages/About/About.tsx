import React from 'react';
import Helmet from 'react-helmet';
import { Layout } from 'theme/ui';

const About: React.FC = () => {
  return (
    <>
      <Helmet title="Extended CRA | About" />
      <Layout>About Page</Layout>
    </>
  );
};

export default About;
