import { AssessmentFile, Callback } from '@types';

import { Action } from '../reducer';
import { AssessmentEnum } from '@enums';
import { Box } from '@material-ui/core';
import { FileItem } from './file';
import React from 'react';
import { ScriptItem } from './script';
import { useStyles } from './styles';

interface IProps {
  file: AssessmentFile;
  type: AssessmentEnum;
  updateFields: Callback<Action, void>;
}

export const CodeItems: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.codeContainer}>
      <FileItem {...props} />
      <ScriptItem updateFields={props.updateFields} />
    </Box>
  );
};
