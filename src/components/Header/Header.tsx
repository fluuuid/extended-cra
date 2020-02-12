import React from 'react';
import styled from 'styled-components';
import { Link, withRouter, BrowserRouter as Router } from 'react-router-dom';

const Wrapper = styled.header`
  padding: 1rem;
  background: ${({ theme: { colors } }) => colors.gray};
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

const A = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.primary};
`;

const Header: React.FC = () => (
  <Router>
    <Wrapper>
      <Nav>
        <A to="/">Home</A>
        <A to="/about">About</A>
      </Nav>
    </Wrapper>
  </Router>
);

export default withRouter(Header);
