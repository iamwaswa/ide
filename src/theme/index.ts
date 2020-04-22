import { Theme, createMuiTheme } from '@material-ui/core/styles';

export const customTheme: Theme = createMuiTheme({
  palette: {
    type: `light`,
    primary: {
      main: `rgb(156, 156, 156)`,
      light: `rgb(249, 249, 249)`,
      dark: `rgb(37, 35, 35)`,
    },
    secondary: {
      main: `rgb(232, 199, 91)`,
      light: `rgb(234, 216, 140)`,
    },
  },
  typography: {
    fontFamily: [
      `'Vollkorn', serif`,
      `'Rye', cursive`,
      `'Great Vibes', cursive`,
    ].join(`,`),
  },
});

// * Fonts
export const hisFont = `'Rye', cursive`;
export const herFont = `'Great Vibes', cursive`;
export const ourFont = `'Vollkorn', serif`;

// * Dimensions
export const menuIconWidth = `40px`;

export const minWidth = `320px`;
export const minHeight = `480px`;

export const largerMobileWidth = `380px`;
export const tabletWidth = `750px`;
export const desktopWidth = `990px`;

export const navigationModalWidth = `100vw`;
