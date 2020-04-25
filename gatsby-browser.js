import 'firebase/auth';

import { GlobalContextProvider } from './src/context';
import { MaterialUIThemeProvider } from './src/theme/provider';
import PropTypes from 'prop-types';
import React from 'react';

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    <MaterialUIThemeProvider>{element}</MaterialUIThemeProvider>
  </GlobalContextProvider>
);

wrapRootElement.propTypes = PropTypes.shape({
  element: PropTypes.node.isRequired,
}).isRequired;

export const shouldUpdateScroll = () => {
  return false;
};
