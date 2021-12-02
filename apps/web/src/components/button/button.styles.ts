import styled from 'styled-components';

export const StyledButton = styled.button<{
  secondary?: boolean;
  big?: boolean;
  hideShadow?: boolean;
}>`
  text-transform: uppercase;
  letter-spacing: 0.8px;
  cursor: pointer;

  padding: ${({ big }) => (big ? '1rem 2rem' : '0.6rem 1.2rem')};

  border: 2px solid ${({ theme }) => theme.palette.primary.main};

  background-color: ${({ theme, secondary }) => {
    return secondary ? '#fff' : theme.palette.primary.main;
  }};

  color: ${({ theme, secondary }) => {
    return secondary ? theme.palette.primary.main : '#fff';
  }};

  border-radius: ${({ theme }) => theme.borderRadius};

  box-shadow: ${({ theme, hideShadow }) =>
    !hideShadow ? theme.shadows[1] : 'none'};

  transition: ${({ theme }) => theme.transition('box-shadow')},
    ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('border')};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[0]};

    border-color: ${({ theme, secondary }) => {
      return secondary
        ? theme.palette.primary.main
        : theme.palette.primary.dark;
    }};

    background-color: ${({ theme, secondary }) => {
      return secondary
        ? theme.palette.common.white
        : theme.palette.primary.dark;
    }};
  }
`;
