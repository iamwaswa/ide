import { Box, IconButton, Tooltip } from '@material-ui/core';

import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
import React from 'react';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import { usePaletteType } from './hooks/paletteType';
import { useStyles } from './styles';

export const NavBarLeft: React.FC = () => {
  const classes = useStyles();
  const { paletteType, togglePaletteType } = usePaletteType();

  return (
    <Box className={classes.left}>
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
    </Box>
  );
};
