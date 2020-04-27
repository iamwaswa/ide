import { IconButton, Tooltip } from '@material-ui/core';

import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import React from 'react';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import { usePaletteType } from './hooks';

export const PaletteTypeToggle: React.FC = () => {
  const { paletteType, togglePaletteType } = usePaletteType();

  return (
    <Tooltip
      placement="right"
      title={paletteType === `dark` ? `Light mode` : `Dark mode`}
    >
      <IconButton onClick={togglePaletteType}>
        {paletteType === `dark` ? (
          <WbSunnyRoundedIcon />
        ) : (
          <NightsStayRoundedIcon />
        )}
      </IconButton>
    </Tooltip>
  );
};
