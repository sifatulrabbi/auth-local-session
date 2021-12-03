import styled from 'styled-components';
import { containerBase, buttonBase } from '../../global-styles';

export const HomeContainer = styled(containerBase)`
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    max-width: 700px;
    grid-gap: 2rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    font-weight: 700;
  }

  .cta-section {
    margin-top: 2rem;
    display: flex;
    grid-gap: 1rem;
  }
`;

export const MainSection = styled(containerBase)``;

export const Button = styled(buttonBase)``;
