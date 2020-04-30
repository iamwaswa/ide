import { Action, ActionEnum } from '../../reducer';
import { AssessmentFile, Callback } from '@types';

import { Button } from '@material-ui/core';
import { FileLanguageAndVersionItem } from './languageAndVersion';
import React from 'react';
import { Utils } from '@utils';
import { useStyles } from './styles';

interface IProps {
  addMarginClassName: string;
  file: AssessmentFile;
  updateFields: Callback<Action, void>;
}

export const FileItem: React.FC<IProps> = ({
  addMarginClassName,
  file,
  updateFields,
}) => {
  const classes = useStyles();

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    Utils.readSingleFileAsText(event.target.files, (result: string): void => {
      updateFields({
        type: ActionEnum.OTHER_FILE_CHANGE,
        property: `data`,
        value: result,
      });
      updateFields({
        type: ActionEnum.OTHER_FILE_CHANGE,
        property: `name`,
        value: event.target.files?.[0].name as string,
      });
    });
  };

  return (
    <>
      <FileLanguageAndVersionItem
        addMarginClassName={addMarginClassName}
        file={file}
        updateFields={updateFields}
      />
      <input
        accept="/*"
        className={classes.uploadButton}
        id="upload-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          className={addMarginClassName}
        >
          Upload file
        </Button>
      </label>
    </>
  );
};
