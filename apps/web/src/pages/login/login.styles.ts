import styled from 'styled-components';
import { containerBase, buttonBase } from '../../global-styles';
import { formGroupBase } from '../../global-styles';

export const LoginContainer = styled(containerBase)`
  .form-container {
    background-color: #fff;
    width: 100%;
    max-width: 600px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    justify-content: center;
    align-items: center;

    box-shadow: ${({ theme }) => theme.shadows[1]};
    border-radius: ${({ theme }) => theme.borderRadius};

    padding: 1.5rem 6vw;
    @media screen and (min-width: ${({ theme }) => theme.breakPoint}) {
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 2rem;
    width: 100%;

    .show-hide-wrapper {
      width: 100%;
      height: max-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .show-hide-btn {
      background: transparent;
      font-size: 1.2rem;
      cursor: pointer;
      transition: ${({ theme }) => theme.transition('color')};

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }

  .alternative {
    font-size: ${({ theme }) => theme.fontSize.body2};

    a {
      color: ${({ theme }) => theme.palette.primary.dark};
      transition: ${({ theme }) => theme.transition('color')};

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const Button = styled(buttonBase)`
  width: 100%;
`;

export const FormGroup = styled(formGroupBase)``;
