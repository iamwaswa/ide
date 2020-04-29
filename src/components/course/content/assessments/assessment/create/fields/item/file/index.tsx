import { Action, ActionEnum } from '../../reducer';
import { AssessmentFile, Callback } from '@types';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import { DateItem } from '../date';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  addMargin: string;
  file: AssessmentFile;
  type: AssessmentEnum;
  updateFields: React.Dispatch<Action>;
}

export const FileItem: React.FC<IProps> = ({
  addMargin,
  file,
  type,
  updateFields,
}) => {
  const classes = useStyles();

  const handleFileDataChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = (): void => {
      updateFields({
        type: ActionEnum.OTHER_FILE_CHANGE,
        property: `data`,
        value: fileReader.result as string,
      });
    };

    fileReader.readAsText(files[0]);
  };

  const handleOtherFileChange = (
    property: `name` | `language`
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
    <>
      <FormControl
        variant="outlined"
        className={`${addMargin} ${classes.language}`}
      >
        <InputLabel id="language">Language</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="language"
          value={file.language}
          onChange={handleOtherFileChange(`language`)}
          label="Language"
        >
          <MenuItem value={JSON.stringify('')}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={JSON.stringify({ lang: `java`, vers: 3 })}>
            Java JDK 10.0.1
          </MenuItem>
          <MenuItem value={JSON.stringify({ lang: `c`, vers: 4 })}>
            C GCC 9.1.0
          </MenuItem>
          <MenuItem value={JSON.stringify({ lang: `cpp`, vers: 0 })}>
            C++ GCC 5.3.0
          </MenuItem>
          <MenuItem value={JSON.stringify({ lang: `cpp`, vers: 4 })}>
            C++ GCC 9.1.0
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="fileName"
        className={addMargin}
        label="Default File Name"
        type="text"
        variant="outlined"
        onChange={handleOtherFileChange(`name`)}
      />
      <DateItem
        fields={file.lastModified}
        setFields={updateFields}
        type={type}
      />
      <input
        accept="/*"
        className={classes.uploadButton}
        id="upload-file"
        type="file"
        onChange={handleFileDataChange}
      />
      <label htmlFor="upload-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={addMargin}
        >
          Upload file
        </Button>
      </label>
    </>
  );
};
