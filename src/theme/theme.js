export const getTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return theme.theme.dark;
  }
  return theme.theme.light;
};

export const theme = {
  theme: {
    light: {
      text: '#2C2C2E',
      border: '#D6D6D6',
      primary: '#52AE77FF',
      primaryHover: 'rgb(82, 146, 108)',
      primaryBackground: '#FFFFFF',
      sidePanelBackground: '#F9F9F9',
      secondaryBackground: '#EEEEEE',
      error: '#DC3545',
      errorBackground: '#F8D7DA',
      success: '#28A745',
      successBackground: '#D4EDDA',
      warning: '#FFC107',
      warningBackground: '#FFF3CD',
      neutral: '#6C757D',
      neutralBackground: '#E2E3E5',
      shadow: 'rgba(0, 0, 0, 0.1)',
    },
    dark: {
      text: '#FFFFFF',
      border: '#4D4D4D',
      primary: '#007BFF',
      primaryHover: '#0056b3',
      primaryBackground: '#003049',
      sidePanelBackground: '#1E1E1E',
      secondaryBackground: '#343638',
      error: '#DC3545',
      errorBackground: '#451515',
      success: '#28A745',
      successBackground: '#153B24',
      warning: '#FFC107',
      warningBackground: '#4A3A10',
      neutral: '#6C757D',
      neutralBackground: '#3C3C3C',
      shadow: 'rgba(0, 0, 0, 0.4)',
    },
    vibrant: {
      text: '#212529',
      border: '#CED4DA',
      primary: '#E83E8C',
      primaryHover: '#C01C66',
      primaryBackground: '#F8F9FA',
      sidePanelBackground: '#FFFFFF',
      secondaryBackground: '#F1F3F5',
      error: '#E74C3C',
      errorBackground: '#FDEDEC',
      success: '#27AE60',
      successBackground: '#E9F7EF',
      warning: '#F1C40F',
      warningBackground: '#FCF3CF',
      neutral: '#95A5A6',
      neutralBackground: '#ECF0F1',
      shadow: 'rgba(0, 0, 0, 0.15)',
    },
  },
};

