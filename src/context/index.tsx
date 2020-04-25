import { AuthContextProvider } from '@context/auth';
import React from 'react';
import { ThemePaletteTypeContextProvider } from '@context/themePaletteType';

export const GlobalContextProvider: React.FC = ({ children }) => {
  return (
    <ThemePaletteTypeContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemePaletteTypeContextProvider>
  );
};
