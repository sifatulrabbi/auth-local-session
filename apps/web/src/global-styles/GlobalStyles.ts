import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    border: none;
    max-width: 100vw;
    max-height: fit-content;
    font-size: inherit;
    color: inherit;
    font-family: inherit;
    list-style-type: none;
    text-decoration: none;
    box-sizing: border-box;
    letter-spacing: inherit;
  }

  body {
    max-width: 100vw;
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: 400;
    font-family: sans-serif;
    background-color: ${({ theme }) => theme.palette.common.white};
    color: ${({ theme }) => theme.palette.common.black};
    line-height: 1.5;
    position: relative;    
    letter-spacing: normal;
  }

  h1, h2, h3 {
    line-height: 1;
    letter-spacing: .8px;
  }
`;
