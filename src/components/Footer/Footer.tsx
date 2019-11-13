import React from 'react';
import styled from 'styled-components';

const FooterEl = styled.header`
  padding: 1rem;
`;

const Footer: React.FC = () => {
  return <FooterEl>{"I'm a footer"}</FooterEl>;
};

export default Footer;
