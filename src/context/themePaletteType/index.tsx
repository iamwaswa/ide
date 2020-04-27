import { PaletteType } from '@material-ui/core';
import React from 'react';

export interface IUseThemePaletteTypeContext {
  paletteType: PaletteType;
  setPaletteType: React.Dispatch<React.SetStateAction<PaletteType>>;
}

export const ThemePaletteTypeContext = React.createContext<
  Partial<IUseThemePaletteTypeContext>
>({});

export const ThemePaletteTypeContextProvider: React.FC = ({ children }) => {
  const [paletteType, setPaletteType] = React.useState<PaletteType>(
    (): PaletteType => {
      if (typeof window !== `undefined`) {
        return (window.localStorage.getItem(`paletteType`) ??
          `dark`) as PaletteType;
      }
      return `dark`;
    }
  );

  return (
    <ThemePaletteTypeContext.Provider value={{ paletteType, setPaletteType }}>
      {children}
    </ThemePaletteTypeContext.Provider>
  );
};
