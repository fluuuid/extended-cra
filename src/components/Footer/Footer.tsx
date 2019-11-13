import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const Footer: React.FC = () => {
  return <Div>hello world</Div>;
};

export default Footer;
