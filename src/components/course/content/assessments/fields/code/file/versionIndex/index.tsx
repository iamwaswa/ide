import { Action, ActionEnum } from '../../../reducer';
import { AssessmentFile, Callback } from '@types';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import React from 'react';
import data from './data.json';
import { useStyles } from './styles';

interface IProps {
  file: AssessmentFile;
  updateFields: Callback<Action, void>;
}

export const FileVersionIndexItem: React.FC<IProps> = ({
  file,
  updateFields,
}) => {
  const classes = useStyles();
  const items = data as { [key: string]: { [versionIndex: string]: string } };

  const handleVersionIndexChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ): void => {
    updateFields({
      type: ActionEnum.VERSION_INDEX_FILE_CHANGE,
      value: Number(event.target.value),
    });
  };

  return (
    <FormControl className={classes.versionIndex} variant="standard">
      <InputLabel htmlFor="version">Version</InputLabel>
      <Select
        id="version"
        value={file.language ? file.versionIndex : ``}
        onChange={handleVersionIndexChange}
      >
        {!file.language && (
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        )}
        {file.language &&
          Object.entries(items[file.language]).map(
            ([versionIndex, version]: [string, string]): JSX.Element => (
              <MenuItem key={version} value={Number(versionIndex)}>
                {version}
              </MenuItem>
            )
          )}
      </Select>
    </FormControl>
  );
};
