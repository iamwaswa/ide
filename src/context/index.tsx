import { AuthContextProvider } from '@context/auth';
import { PathContextProvider } from '@context/path';
import React from 'react';
import { ThemePaletteTypeContextProvider } from '@context/themePaletteType';

export const GlobalContextProvider: React.FC = ({ children }) => {
  return (
    <ThemePaletteTypeContextProvider>
      <AuthContextProvider>
        <PathContextProvider>{children}</PathContextProvider>
      </AuthContextProvider>
    </ThemePaletteTypeContextProvider>
  );
};
