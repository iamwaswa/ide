import { Box, FormControlLabel, Switch } from '@material-ui/core';

import React from 'react';
import { TabEnum } from '../context/reducer';
import { useGradingContext } from '../context/hooks';

interface IProps {
  show: boolean;
  tab: TabEnum;
}

export const Annotate: React.FC<IProps> = ({ show, tab }) => {
  const { annotate, toggleAnnotate } = useGradingContext();

  return show ? (
    <Box
      role="tab-panel"
      id={`tab-panel-${tab}`}
      aria-labelledby={`${tab}-tab`}
    >
      <FormControlLabel
        control={
          <Switch autoFocus checked={annotate} onChange={toggleAnnotate} />
        }
        label="Select this if you would like to annotate the student's code in the editor and submit it as part of grading"
        labelPlacement="bottom"
      />
    </Box>
  ) : null;
};
