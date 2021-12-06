import styled from 'styled-components';
import { containerBase, buttonBase } from '../../global-styles';

export const UsersContainer = styled(containerBase)`
  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 8vh;

    .title {
      font-size: ${({ theme }) => theme.fontSize.h2};
    }
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const UserInfo = styled(containerBase)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};

  span {
    font-size: ${({ theme }) => theme.fontSize.body};

    .bold {
      font-weight: 700;
    }
  }
`;

export const Button = styled(buttonBase)`
  margin-top: 10vh;
`;
