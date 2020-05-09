import { Action, ActionEnum } from '../../../reducer';
import { AssessmentFile, Callback } from '@types';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { LanguageEnum } from '@enums';
import React from 'react';
import items from './data.json';
import { useStyles } from './styles';

interface IProps {
  file: AssessmentFile;
  updateFields: Callback<Action, void>;
}

export interface ILanguage {
  language: string;
  languageDisplay: string;
}

export const FileLanguageItem: React.FC<IProps> = ({ file, updateFields }) => {
  const classes = useStyles();

  const handleLanguageChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ): void => {
    updateFields({
      type: ActionEnum.LANGUAGE_FILE_CHANGE,
      value: event.target.value as LanguageEnum,
    });
  };

  return (
    <FormControl className={classes.language} variant="standard">
      <InputLabel htmlFor="language">Language</InputLabel>
      <Select
        id="language"
        value={file.language}
        onChange={handleLanguageChange}
        label="Language"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items.map(
          ({ language, languageDisplay }: ILanguage): JSX.Element => (
            <MenuItem key={language} value={language}>
              {languageDisplay}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};
