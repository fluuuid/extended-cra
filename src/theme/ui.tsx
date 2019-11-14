import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  min-height: 100vh;
`;
