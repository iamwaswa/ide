import { AuthContextProvider } from '@context/auth';
import { PathContextProvider } from '@context/path';
import { QuizContextProvider } from './quiz';
import React from 'react';
import { ThemePaletteTypeContextProvider } from '@context/themePaletteType';

export const GlobalContextProvider: React.FC = ({ children }) => {
  return (
    <ThemePaletteTypeContextProvider>
      <AuthContextProvider>
        <QuizContextProvider>
          <PathContextProvider>{children}</PathContextProvider>
        </QuizContextProvider>
      </AuthContextProvider>
    </ThemePaletteTypeContextProvider>
  );
};
