export const theme = {
  palette: {
    primary: {
      main: '#42c8f5',
      dark: '#009bcf',
    },
    common: {
      white: '#f0f0f0',
      black: '#333',
      shadow: 'rgba(0,0,0,0.14)',
    },
  },
  fontSize: {
    h1: '5rem',
    h2: '3.5rem',
    h3: '2.5rem',
    h4: '1.7rem',
    body: '16px',
    body2: '.9rem',
    subtitle: '.8rem',
    caption: '13px',
  },
  borderRadius: '6px',
  shadows: [
    `rgba(0, 0, 0, 0.14) 0px 0px 3px -2px`,
    `rgba(0, 0, 0, 0.14) 2px 4px 8px -1px`,
    `rgba(0, 0, 0, 0.14) 2px 4px 24px -2px`,
  ],
  transition: (styleName: string) => {
    return `${styleName} 200ms ease-out`;
  },
};

export type ITheme = typeof theme;
