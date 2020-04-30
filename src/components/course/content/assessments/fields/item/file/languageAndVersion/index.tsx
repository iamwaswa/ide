import { Action, ActionEnum } from '../../../reducer';
import { AssessmentFile, Callback } from '@types';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { Display } from './display';
import React from 'react';
import languagesAndVersions from './data.json';

interface IProps {
  addMarginClassName: string;
  file: AssessmentFile;
  updateFields: Callback<Action, void>;
}

export interface ILanguagesAndVersions {
  language: string;
  languageDisplay: string;
  versions: Array<{ versionDisplay: string; versionIndex: number }>;
}

export const FileLanguageAndVersionItem: React.FC<IProps> = ({
  addMarginClassName,
  file,
  updateFields,
}) => {
  const handleOtherFileChange = (
    property: `language`
  ): Callback<React.ChangeEvent<{ value: unknown }>, void> => (
    event: React.ChangeEvent<{ value: unknown }>
  ): void => {
    updateFields({
      type: ActionEnum.OTHER_FILE_CHANGE,
      property,
      value: event.target.value as string,
    });
  };

  return (
    <FormControl variant="outlined" className={addMarginClassName}>
      <InputLabel id="language">Language</InputLabel>
      <Select
        labelId="language"
        id="language-select"
        value={file.language}
        onChange={handleOtherFileChange(`language`)}
        label="Language"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {languagesAndVersions.map(
          (data: ILanguagesAndVersions, index: number): JSX.Element => (
            <Display key={index} {...data} />
          )
        )}
      </Select>
    </FormControl>
  );
};
