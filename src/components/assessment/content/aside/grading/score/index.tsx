import { Box, Slider, TextField, Typography } from '@material-ui/core';

import React from 'react';
import { TabEnum } from '../context/reducer';
import { useGradingContext } from '../context/hooks';
import { useScore } from './hooks';
import { useStyles } from './styles';

interface IProps {
  show: boolean;
  tab: TabEnum;
}

export const Score: React.FC<IProps> = ({ show, tab }) => {
  const { score, total, updateScore, updateTotal } = useGradingContext();
  const classes = useStyles();
  const { displayText, getAriaValueText } = useScore();

  return show ? (
    <Box
      role="tab-panel"
      id={`tab-panel-${tab}`}
      aria-labelledby={`${tab}-tab`}
    >
      <Box className={classes.variants}>
        <TextField
          label="Total"
          size="medium"
          type="number"
          value={total}
          variant="outlined"
          onChange={updateTotal}
        />
      </Box>
      <Typography id="slider" gutterBottom>
        {`${displayText}`}
      </Typography>
      <Slider
        min={0}
        max={total ?? 0}
        value={score ?? 0}
        onChange={updateScore}
        getAriaValueText={getAriaValueText}
        aria-labelledby="slider"
      />
    </Box>
  ) : null;
};
