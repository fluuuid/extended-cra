import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  position: relative;
  min-height: 100vh;
  font-size: 1rem;
  flex-flow: column;
`;
