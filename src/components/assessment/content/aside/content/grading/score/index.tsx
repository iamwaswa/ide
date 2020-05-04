import { Box, Slider, TextField, Typography } from '@material-ui/core';

import React from 'react';
import { TabEnum } from '../context/reducer';
import { useGradingContext } from '../context/hooks';
import { useScore } from './hooks';
import { useStyles } from './styles';

interface IProps {
  constrainWidthClassName: string;
  show: boolean;
  tab: TabEnum;
}

export const Score: React.FC<IProps> = ({
  constrainWidthClassName,
  show,
  tab,
}) => {
  const { score, total, updateScore, updateTotal } = useGradingContext();
  const classes = useStyles();
  const { displayText, getAriaValueText } = useScore();

  return show ? (
    <Box
      role="tab-panel"
      id={`tab-panel-${tab}`}
      aria-labelledby={`${tab}-tab`}
    >
      <TextField
        className={`${classes.total} ${constrainWidthClassName}`}
        autoFocus={true}
        color="secondary"
        fullWidth={true}
        helperText="What is the highest score?"
        label="Total"
        size="medium"
        type="number"
        value={total}
        variant="outlined"
        onChange={updateTotal}
      />
      <Typography id="slider" gutterBottom={true}>
        {`${displayText}`}
      </Typography>
      <Slider
        classes={{ root: constrainWidthClassName }}
        color="secondary"
        min={0}
        max={total}
        value={score}
        onChange={updateScore}
        getAriaValueText={getAriaValueText}
        aria-labelledby="slider"
      />
    </Box>
  ) : null;
};
