import * as React from 'react';

import {
  IUseThemePaletteType,
  ThemePaletteType,
} from '@context/themePaletteType';

export const useThemePaletteType = (): IUseThemePaletteType => {
  const { paletteType, setPaletteType } = React.useContext(ThemePaletteType);

  if (paletteType === undefined || setPaletteType === undefined) {
    throw Error(`ThemePaletteType is undefined`);
  }

  return {
    paletteType,
    setPaletteType,
  };
};
