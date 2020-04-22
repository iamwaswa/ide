import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import React from 'react';
import { themeGenerator } from '@theme';
import { useThemePaletteType } from '@context/themePaletteType/hooks';

export const MaterialUIThemeProvider: React.FC = ({ children }) => {
  const { paletteType } = useThemePaletteType();
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={responsiveFontSizes(themeGenerator(paletteType))}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};
