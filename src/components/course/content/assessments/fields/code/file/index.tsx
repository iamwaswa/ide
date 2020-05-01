import { AssessmentFile, Callback } from '@types';

import { Action } from '../../reducer';
import { Box } from '@material-ui/core';
import { FileLanguageItem } from './language';
import { FileVersionIndexItem } from './versionIndex';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  file: AssessmentFile;
  updateFields: Callback<Action, void>;
}

export const LanguageAndVersion: React.FC<IProps> = ({
  file,
  updateFields,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <FileLanguageItem file={file} updateFields={updateFields} />
      <FileVersionIndexItem file={file} updateFields={updateFields} />
    </Box>
  );
};
