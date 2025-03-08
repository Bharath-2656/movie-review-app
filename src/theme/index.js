export const getTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return theme.theme.dark;
  }
  return theme.theme.light;
};

export const theme ={
  theme: {
    light: {
      text: '#2C2C2E',
      border: '#D6D6D6',
      primary: '#007BFF',
      primaryBackground: '#FFFFFF',
      sidePanelBackground: '#FFFFFF',
      secondaryBackground: '#EEEEEE',
    },
    dark: {
      text: '#FFFFFF',
      border: '#D0D0D0',
      primary: '#007BFF',
      primaryBackground: '#262829',
      sidePanelBackground: '#242424',
      secondaryBackground: '#343638',
    },
  },
};
