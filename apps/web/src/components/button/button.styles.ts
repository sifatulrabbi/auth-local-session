import styled from 'styled-components';

export const StyledButton = styled.button<{ secondary?: boolean }>`
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.6rem 1.2rem;
  cursor: pointer;

  transition: ${({ theme }) => theme.transition('box-shadow')},
    ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('border')};

  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  border: 2px solid ${({ theme }) => theme.palette.primary.main};

  background-color: ${({ theme, secondary }) => {
    return secondary ? '#fff' : theme.palette.primary.main;
  }};

  color: ${({ theme, secondary }) => {
    return secondary ? theme.palette.primary.main : '#fff';
  }};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[0]};

    border: 2px solid
      ${({ theme, secondary }) => {
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
