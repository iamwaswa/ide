import { Theme, createMuiTheme } from '@material-ui/core/styles';

import { PaletteType } from '@material-ui/core';

export const themeGenerator = (paletteType: PaletteType): Theme =>
  createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        [`@global`]: {
          html: {
            height: `100%`,
          },
          body: {
            height: `100%`,
          },
          img: {
            maxWidth: `100%`,
          },
          [`#___gatsby`]: {
            height: `100%`,
          },
          [`#gatsby-focus-wrapper`]: {
            height: `100%`,
          },
          [`.tl-edges`]: {
            height: `100%`,
          },
          [`.tl-wrapper`]: {
            display: `flex`,
            flexDirection: `column`,
            height: `100%`,
          },
        },
      },
    },
    palette: {
      type: paletteType,
      primary: {
        main: paletteType === `light` ? `#2196f3` : `#1976d2`,
      },
      secondary: {
        main: paletteType === `light` ? `#9c27b0` : `#7b1fa2`,
      },
    },
  });
