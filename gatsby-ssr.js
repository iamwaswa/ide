import 'firebase/auth';

import { MaterialUIThemeProvider } from './src/theme/provider';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemePaletteTypeContextProvider } from './src/context/themePaletteType';

export const wrapRootElement = ({ element }) => (
  <ThemePaletteTypeContextProvider>
    <MaterialUIThemeProvider>{element}</MaterialUIThemeProvider>
  </ThemePaletteTypeContextProvider>
);

wrapRootElement.propTypes = PropTypes.shape({
  element: PropTypes.node.isRequired,
}).isRequired;
