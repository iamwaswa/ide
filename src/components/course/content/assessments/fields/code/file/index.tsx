import { Action, ActionEnum } from '../../reducer';
import { AssessmentFile, Callback } from '@types';

import { AssessmentEnum } from '@enums';
import { FileLanguageItem } from './language';
import { FileVersionIndexItem } from './versionIndex';
import React from 'react';
import { Upload } from '../upload';

interface IProps {
  file: AssessmentFile;
  type: AssessmentEnum;
  updateFields: Callback<Action, void>;
}

export const FileItem: React.FC<IProps> = ({ file, type, updateFields }) => {
  const handleUpdateData = (data: string): void => {
    updateFields({
      type: ActionEnum.OTHER_FILE_CHANGE,
      property: `data`,
      value: data,
    });
  };

  const handleUpdateName = (name: string): void => {
    updateFields({
      type: ActionEnum.OTHER_FILE_CHANGE,
      property: `name`,
      value: name,
    });
  };

  return (
    <>
      <FileLanguageItem file={file} updateFields={updateFields} />
      <FileVersionIndexItem file={file} updateFields={updateFields} />
      <Upload
        defaultButtonText={`Upload ${type.toLowerCase()} file`}
        name={`${type.substring(0, 1).toUpperCase()}${type
          .substring(1)
          .toLowerCase()} file`}
        updateData={handleUpdateData}
        updateName={handleUpdateName}
      />
    </>
  );
};
