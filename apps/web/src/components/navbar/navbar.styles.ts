import styled from 'styled-components';

export const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1500;
  background-color: #fff;
  padding: 0 1rem;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-shadow: ${({ theme }) => theme.shadows[1]};

  @media screen and (min-width: ${({ theme }) => theme.breakPoint}) {
    padding: 0 8vw;
    overflow: hidden;
  }

  .logo {
    font-size: ${({ theme }) => theme.fontSize.h4};
    font-weight: 700;
    color: ${({ theme }) => theme.palette.primary.main};

    a {
      &:hover {
        color: inherit;
        background-color: inherit;
      }
    }
  }
`;

export const NavMenu = styled.nav<{ show: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-gap: 1rem;
  background-color: #fff;
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;

  padding: ${({ show }) => (show ? '1rem 0' : 0)};
  box-shadow: ${({ theme }) => theme.shadows[1]};
  max-height: ${({ show }) => (show ? '100vh' : '0')};
  transition: ${({ theme }) => theme.transition('max-height')},
    ${({ theme }) => theme.transition('padding')};

  li {
    min-width: max-content;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      width: 100%;
      padding: 0.5rem 1rem;

      border-radius: ${({ theme }) => theme.borderRadius};
      transition: ${({ theme }) => theme.transition('color')},
        ${({ theme }) => theme.transition('background-color')};

      &:hover {
        background-color: ${({ theme }) => theme.palette.common.white};
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    position: unset;
    padding: 0;
    box-shadow: none;
    width: max-content;
    max-height: 100vh;
  }
`;

export const ToggleMenuBtn = styled.button`
  background-color: transparent;
  padding: 0.5rem;
  font-size: 1.7rem;
  cursor: pointer;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;
