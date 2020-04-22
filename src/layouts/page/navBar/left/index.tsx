import * as React from 'react';

import { Box, IconButton, Tooltip, Typography } from '@material-ui/core';

import Brightness5RoundedIcon from '@material-ui/icons/Brightness5Rounded';
import NightsStayRoundedIcon from '@material-ui/icons/NightsStayRounded';
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
            <Brightness5RoundedIcon />
          ) : (
            <NightsStayRoundedIcon />
          )}
        </IconButton>
      </Tooltip>
      <Typography variant="body1">IDE</Typography>
    </Box>
  );
};