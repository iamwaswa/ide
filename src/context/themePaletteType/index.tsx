import { PaletteType } from '@material-ui/core';
import React from 'react';

export interface IUseThemePaletteType {
  paletteType: PaletteType;
  setPaletteType: React.Dispatch<React.SetStateAction<PaletteType>>;
}

export const ThemePaletteType = React.createContext<
  Partial<IUseThemePaletteType>
>({});

export const ThemePaletteTypeContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [paletteType, setPaletteType] = React.useState<PaletteType>(
    (): PaletteType => {
      if (typeof window !== `undefined`) {
        return (window.localStorage.getItem(`paletteType`) ??
          `dark`) as PaletteType;
      }
      return `dark`;
    }
  );

  // React.useEffect((): void => {
  //   if (typeof window !== `undefined`) {
  //     setPaletteType(
  //       (window.localStorage.getItem(`paletteType`) ?? `dark`) as PaletteType
  //     );
  //   }
  // }, []);

  return (
    <ThemePaletteType.Provider value={{ paletteType, setPaletteType }}>
      {children}
    </ThemePaletteType.Provider>
  );
};
