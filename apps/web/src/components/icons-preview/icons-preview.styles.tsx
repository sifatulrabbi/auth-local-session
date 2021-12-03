import styled from 'styled-components';
import { containerBase } from '../../global-styles';

export const Container = styled(containerBase)`
  margin-top: 10vh;
  width: 100%;
  align-self: center;
  max-width: 900px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: clamp(1rem, 4vw, 5rem);
  justify-items: center;

  .icon {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;
