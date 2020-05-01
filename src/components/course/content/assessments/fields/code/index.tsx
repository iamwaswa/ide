import { Action, ActionEnum } from '../reducer';
import { AssessmentFile, Callback } from '@types';

import { AssessmentEnum } from '@enums';
import { Box } from '@material-ui/core';
import { LanguageAndVersion } from './file';
import React from 'react';
import { ScriptItem } from './script';
import { Upload } from './upload';
import { useStyles } from './styles';

interface IProps {
  file: AssessmentFile;
  type: AssessmentEnum;
  updateFields: Callback<Action, void>;
}

export const CodeItems: React.FC<IProps> = (props) => {
  const classes = useStyles();

  const handleUpdateData = (data: string): void => {
    props.updateFields({
      type: ActionEnum.OTHER_FILE_CHANGE,
      property: `data`,
      value: data,
    });
  };

  const handleUpdateName = (name: string): void => {
    props.updateFields({
      type: ActionEnum.OTHER_FILE_CHANGE,
      property: `name`,
      value: name,
    });
  };

  return (
    <Box className={classes.codeContainer}>
      <LanguageAndVersion {...props} />
      <Box className={classes.uploadContainer}>
        <Upload
          defaultButtonText={`Upload ${props.type.toLowerCase()} file`}
          name={`${props.type
            .substring(0, 1)
            .toUpperCase()}${props.type.substring(1).toLowerCase()} file`}
          updateData={handleUpdateData}
          updateName={handleUpdateName}
        />
        <ScriptItem updateFields={props.updateFields} />
      </Box>
    </Box>
  );
};
