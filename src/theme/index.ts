import { Theme, createMuiTheme } from '@material-ui/core/styles';

import { PaletteType } from '@material-ui/core';
import { generatePalette } from './generatePalette';
import { overrides } from './overrides';

export const themeGenerator = (paletteType: PaletteType): Theme =>
  createMuiTheme({
    //@ts-ignore
    overrides,
    palette: generatePalette(paletteType),
  });
