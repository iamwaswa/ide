import { MaterialUIThemeProvider } from './src/theme/provider';
import PropTypes from 'prop-types';
import React from 'react';

export const wrapRootElement = ({ element }) => (
  <MaterialUIThemeProvider>{element}</MaterialUIThemeProvider>
);

wrapRootElement.propTypes = PropTypes.shape({
  element: PropTypes.node.isRequired,
}).isRequired;

export const shouldUpdateScroll = () => {
  return false;
};
