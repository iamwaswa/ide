import * as React from 'react';

import { IDEStylesContext } from '../';

export const useIDEStylesContext = (): string =>
  React.useContext(IDEStylesContext);
