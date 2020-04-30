import { Action, ActionEnum } from '../../reducer';

import { Callback } from '@types';
import React from 'react';
import { Upload } from '../upload';

interface IProps {
  updateFields: Callback<Action, void>;
}

export const ScriptItem: React.FC<IProps> = ({ updateFields }) => {
  const handleUpdateData = (data: string): void => {
    updateFields({
      type: ActionEnum.OTHER_FIELD_CHANGE,
      name: `script`,
      value: data,
    });
  };

  return (
    <Upload
      defaultButtonText="Upload script"
      name="Script"
      updateData={handleUpdateData}
    />
  );
};
