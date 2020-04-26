import { Callback } from '@types';
import { PaletteType } from '@material-ui/core';
import React from 'react';
import { useThemePaletteType } from '@context/themePaletteType/hooks';

interface IUsePaletteType {
  paletteType: PaletteType;
  togglePaletteType: Callback<React.MouseEvent, void>;
}

export const usePaletteType = (): IUsePaletteType => {
  const { paletteType, setPaletteType } = useThemePaletteType();
  React.useEffect((): void => {
    const storedPaletteType = localStorage.getItem(`paletteType`);
    if (storedPaletteType !== paletteType) {
      localStorage.setItem(`paletteType`, paletteType);
    }
  }, [paletteType]);

  const togglePaletteType = () =>
    setPaletteType(
      (currentType: PaletteType): PaletteType =>
        currentType === `dark` ? `light` : `dark`
    );

  return { paletteType, togglePaletteType };
};
