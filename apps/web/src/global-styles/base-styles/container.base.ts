import styled from 'styled-components';

export const containerBase = styled.div<{ color: 'default' | 'light' }>`
  max-width: 100vw;
  overflow-x: hidden;
  height: max-content;
  padding: 1rem;

  background-color: ${({ theme, color }) => {
    if (color === 'default') {
      return theme.palette.common.white;
    } else if (color === 'light') {
      return '#fff';
    }
  }};

  @media screen and (min-width: ${({ theme }) => theme.breakPoint}) {
    padding: 1rem 8vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;
