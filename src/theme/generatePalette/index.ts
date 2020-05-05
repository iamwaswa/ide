import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { PaletteType } from '@material-ui/core';

export const generatePalette = (paletteType: PaletteType): PaletteOptions => ({
  type: paletteType,
  primary: {
    main: paletteType === `light` ? `#2196f3` : `#1976d2`,
  },
  secondary: {
    main: paletteType === `light` ? `#9c27b0` : `#7b1fa2`,
  },
});
