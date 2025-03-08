import {getColors} from 'theme-colors';


let theme;
const baseColor = '#0281BC';

try {
  theme = getColors(baseColor);
} catch  {
  theme = {
    '600': baseColor,
    '700': baseColor,
  };
}

const genericColors = {
  action: baseColor,
  hover: theme[600],
  active: theme[700],
};

export default theme = {
  brand: {
    ...genericColors,
    actionShades: {
      200: genericColors.action,
      500: genericColors.action,
      600: genericColors.hover,
      700: genericColors.active,
    },
  },
  app: {
    button: '#36363699',
    darkText: '#2C2C2E',
    lightGray: '#CBD5E0',
    darkGray: '#6E6E6F',
    pureBlack: '#000000',
    blackAlpha: {
      100: '#0000000F',
      200: '#00000014',
      300: '#00000029',
      400: '#0000003D',
      500: '#0000005C',
      600: '#0000007A',
      700: '#000000A3',
      800: '#000000CC',
    },
    whiteAlpha: {
      100: '#FFFFFF0F',
      200: '#FFFFFF14',
      300: '#FFFFFF29',
      400: '#FFFFFF3D',
      500: '#FFFFFF5C',
      600: '#FFFFFF7A',
      700: '#FFFFFFA3',
      800: '#FFFFFFCC',
    },
    darkBackground: '#343638',
    badgeBackground: '#222222',
    successGreen: '#2DB96F',
    alertRed: '#F84F4F',
    warningYellow: '#FFD747',
    notification: {
      success: '#008843',
      error: '#DB333A',
      warning: '#F4BD50',
    },
    redShades: {
      100: '#FF99A4',
      200: '#F84F4F',
      300: '#DB333A',
    },
    blueShades: {
      10: '#E8F5FF',
      50: '#EBF8FF',
      100: '#1B98FF',
      200: '#008BFD',
    },
    yellowShades: {
      100: '#F4BD5040',
    },
    blackShades: {
      100: '#343638',
      300: '#2C2C2E',
    },
    grayShades: {
      200: '#D6D6D6',
      300: '#D0D0D0',
      400: '#A0AEC0',
      500: '#718096',
    },
  },
  green: {
    200: '#2DB96F',
    500: '#2DB96F',
    600: '#199E58',
    700: '#008843',
  },
  greenAlpha: {
    250: '#2DB96F40',
  },
  red: {
    200: '#F84F4F',
    500: '#F84F4F',
  },
  yellow: {
    200: '#F4BD50',
    500: '#8B6A2A',
  },
  gray: {
    100: '#EDF2F7',
    200: '#E2E8F0',
    300: '#CBD5E0',
  },
  theme: {
    light: {
      text: '#2C2C2E',
      border: '#D6D6D6',
      primaryBackground: '#FFFFFF',
      sidePanelBackground: '#FFFFFF',
      secondaryBackground: '#EEEEEE',
    },
    dark: {
      text: '#FFFFFF',
      border: '#D0D0D0',
      primaryBackground: '#262829',
      sidePanelBackground: '#242424',
      secondaryBackground: '#343638',
    },
  },
};
