import React from 'react';
import styled from 'styled-components';

const HeaderEl = styled.header`
  padding: 1rem;
`;

const Header: React.FC = () => {
  return <HeaderEl>{"I'm a header"}</HeaderEl>;
};

export default Header;
