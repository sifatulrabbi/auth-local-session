import styled from 'styled-components';
import { containerBase, buttonBase } from '../../global-styles';
import { formGroupBase } from '../../global-styles/base-styles/form-group.base';

export const LoginContainer = styled(containerBase)`
  form {
    background-color: #fff;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1.5rem;
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-gap: 2rem;

    box-shadow: ${({ theme }) => theme.shadows[1]};

    @media screen and (min-width: ${({ theme }) => theme.breakPoint}) {
      padding: 1.5rem 6vw;
    }

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
