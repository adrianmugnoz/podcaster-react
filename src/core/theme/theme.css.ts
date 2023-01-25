import {
  createTheme,
  createThemeContract,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css';

const root = createGlobalTheme('#app', {
  font: {
    body: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  },
  size: {
    0: '0',
    10: '1px',
    25: '2px',
    40: '4px',
    50: '5px',
    65: '6px',
    75: '8px',
    85: '9px',
    100: '10px',
    115: '11px',
    125: '13px',
    130: '14px',
    150: '15px',
    160: '16px',
    175: '18px',
    200: '20px',
  },
  spacing: {
    0: '0',
    10: '1px',
    25: '2px',
    40: '4px',
    50: '5px',
    65: '6px',
    75: '8px',
    85: '9px',
    100: '10px',
    115: '11px',
    125: '13px',
    130: '14px',
    150: '15px',
    160: '16px',
    175: '18px',
    200: '20px',
  },
  shape: {
    rounded: '6px',
    circle: '100%',
  },
  shadow: {
    primary:
      'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;',
  },
  content: {
    maxWidth: '1200px',
  },
});

const color = createThemeContract({
  brand: '',
  white: '',
  black: '',
  gray100: '',
  gray200: '',
  gray300: '',
  gray600: '',
});

export const lightTheme = createTheme(color, {
  brand: '#337ab7',
  white: '#ffffff',
  black: '#000000',
  gray100: '#f2f2f2',
  gray200: '#dee2e6',
  gray300: '#cccccc',
  gray600: '#202124',
});

export const vars = { ...root, color };

globalStyle('#app', {
  fontFamily: vars.font.body,
});
