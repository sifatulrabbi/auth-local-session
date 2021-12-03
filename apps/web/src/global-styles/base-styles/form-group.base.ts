import styled from 'styled-components';

export const formGroupBase = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: 0.5rem;

  label {
    width: 100%;
  }

  input {
    width: 100%;
    padding: 0.7rem 1rem;
    outline: none;
    border-bottom: 2px solid transparent;
    letter-spacing: 0.5px;

    font-size: ${({ theme }) => theme.fontSize.body2};
    box-shadow: ${({ theme }) => theme.shadows[0]};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: ${({ theme }) => theme.transition('box-shadow')};

    &::placeholder {
      transition: ${({ theme }) => theme.transition('opacity')};
      color: ${({ theme }) => theme.palette.common.fontSecondary};
    }

    &:focus {
      border-color: ${({ theme }) => theme.palette.primary.main};

      &::placeholder {
        opacity: 0.5;
      }
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoint}) {
      &:hover {
        box-shadow: ${({ theme }) => theme.shadows[2]};
      }
    }
  }
`;
