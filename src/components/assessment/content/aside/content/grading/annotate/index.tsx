import { Box, FormControlLabel, Switch } from '@material-ui/core';

import React from 'react';
import { TabEnum } from '../context/reducer';
import { useGradingContext } from '../context/hooks';
import { useStyles } from './styles';

interface IProps {
  constrainWidthClassName: string;
  show: boolean;
  tab: TabEnum;
}

export const Annotate: React.FC<IProps> = ({
  constrainWidthClassName,
  show,
  tab,
}) => {
  const { annotate, toggleAnnotate } = useGradingContext();
  const classes = useStyles();

  return show ? (
    <Box
      className={constrainWidthClassName}
      role="tab-panel"
      id={`tab-panel-${tab}`}
      aria-labelledby={`${tab}-tab`}
    >
      <FormControlLabel
        classes={{ root: classes.annotate }}
        control={
          <Switch
            autoFocus={true}
            checked={annotate}
            onChange={toggleAnnotate}
          />
        }
        label="Select this if you would like to annotate the student's work in the editor and submit it as part of grading"
        labelPlacement="bottom"
      />
    </Box>
  ) : null;
};
