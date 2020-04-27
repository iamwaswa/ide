import {
  IUseThemePaletteTypeContext,
  ThemePaletteTypeContext,
} from '@context/themePaletteType';

import React from 'react';

export const useThemePaletteTypeContext = (): IUseThemePaletteTypeContext => {
  const { paletteType, setPaletteType } = React.useContext(
    ThemePaletteTypeContext
  );

  if (paletteType === undefined || setPaletteType === undefined) {
    throw Error(`ThemePaletteTypeContext is undefined`);
  }

  return {
    paletteType,
    setPaletteType,
  };
};
