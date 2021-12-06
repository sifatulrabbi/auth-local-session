import styled from 'styled-components';
import { containerBase, buttonBase } from '../../global-styles';

export const LostContainer = styled(containerBase)`
  text-align: center;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
    margin-bottom: 10vh;
  }
`;

export const Button = styled(buttonBase)``;
