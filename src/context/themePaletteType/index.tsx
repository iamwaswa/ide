import { Callback, OrNull } from '@types';

import { PaletteType } from '@material-ui/core';
import React from 'react';

export interface IUseThemePaletteType {
  paletteType: PaletteType;
  setPaletteType: Callback<PaletteType, void>;
}

export const ThemePaletteType = React.createContext<
  Partial<IUseThemePaletteType>
>({});

export const ThemePaletteTypeContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [paletteType, setPaletteType] = React.useState<PaletteType>(
    (localStorage.getItem(`paletteType`) as OrNull<PaletteType>) ?? `dark`
  );

  return (
    <ThemePaletteType.Provider value={{ paletteType, setPaletteType }}>
      {children}
    </ThemePaletteType.Provider>
  );
};
