export const theme = {
  palette: {
    primary: {
      main: '#42c8f5',
      dark: '#009bcf',
    },
    common: {
      white: '#f0f0f0',
      black: '#333',
      fontSecondary: '#777',
      shadow: 'rgba(0,0,0,0.14)',
    },
  },
  fontSize: {
    h1: 'clamp(3rem, 7vw, 5rem)',
    h2: 'clamp(2.2rem, 5vw,4rem)',
    h3: 'clamp(1.8rem, 4vw, 2.6rem)',
    h4: 'clamp(1.4rem, 3vw, 2rem)',
    body: '16px',
    body2: '.9rem',
    subtitle: '.8rem',
    caption: '13px',
  },
  borderRadius: '6px',
  shadows: [
    `rgba(0, 0, 0, 0.24) 0px 0px 2px 0px`,
    `rgba(0, 0, 0, 0.14) 2px 4px 8px -1px`,
    `rgba(0, 0, 0, 0.14) 2px 4px 24px -2px`,
  ],
  transition: (styleName: string) => {
    return `${styleName} 200ms ease-out`;
  },
  breakPoint: '800px',
};

export type ITheme = typeof theme;
