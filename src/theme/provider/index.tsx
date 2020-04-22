import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import React from 'react';
import { customTheme } from '..';

export const MaterialUIThemeProvider: React.FC = ({ children }) => (
  <>
    <Helmet>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Rye&family=Vollkorn&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <ThemeProvider theme={responsiveFontSizes(customTheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </>
);
