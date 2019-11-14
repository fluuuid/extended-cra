import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 1rem;
  background: ${({ theme: { colors } }) => colors.gray};
  color: ${({ theme: { colors } }) => colors.lightGray};
  font-size: 0.75rem;
`;

const Footer: React.FC = () => {
  return <Wrapper>© Copyright FLUUUID 2019</Wrapper>;
};

export default Footer;
