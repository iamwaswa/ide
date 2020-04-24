import {
  IUseThemePaletteType,
  ThemePaletteType,
} from '@context/themePaletteType';

import React from 'react';

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
