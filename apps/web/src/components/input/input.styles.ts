import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0.7rem;
  outline: none;

  box-shadow: ${({ theme }) => theme.shadows[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transition('box-shadow')};

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows[2]};
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.palette.primary.main};
  }
`;
