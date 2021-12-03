import styled from 'styled-components';

export const StyledFooter = styled.footer`
  align-self: flex-end;
  position: relative;
  max-width: 100vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  padding: 1rem;
  padding-top: 2rem;
  margin-top: 5vh;
  margin-bottom: 5vh;
  color: ${({ theme }) => theme.palette.common.fontSecondary};

  @media screen and (min-width: ${({ theme }) => theme.breakPoint}) {
    padding: 1rem 8vw;
  }

  header {
    text-align: center;

    a {
      color: ${({ theme }) => theme.palette.primary.dark};
      transition: ${({ theme }) => theme.transition('color')};

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 80%;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.common.shadow};
  }

  .links-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 0.5rem;

    @media screen and (min-width: ${({ theme }) => theme.breakPoint}) {
      flex-direction: row;
      width: max-content;
    }

    a {
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.body2};
      transition: ${({ theme }) => theme.transition('color')};

      &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;
