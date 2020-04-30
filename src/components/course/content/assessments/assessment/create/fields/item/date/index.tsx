import { Action, ActionEnum } from '../../reducer';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { Box } from '@material-ui/core';
import { Callback } from '@types';
import DateFnsUtils from '@date-io/date-fns';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import React from 'react';

interface IProps {
  addMarginClassName: string;
  inputClassName: string;
  label: string;
  name: string;
  updateFields: Callback<Action, void>;
  value?: Date;
}

export const DateItem: React.FC<IProps> = ({
  addMarginClassName,
  inputClassName,
  label,
  name,
  value,
  updateFields,
}) => {
  const handleDateChange = (
    name: string
  ): Callback<MaterialUiPickersDate, void> => (
    date: MaterialUiPickersDate
  ): void => {
    if (date) {
      updateFields({ type: ActionEnum.OTHER_FIELD_CHANGE, name, value: date });
    }
  };

  return (
    <Box className={`${addMarginClassName} ${inputClassName}`}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar={true}
          variant="inline"
          format="MM/dd/yyyy"
          id={name}
          label={label}
          value={value}
          onChange={handleDateChange(name)}
          KeyboardButtonProps={{
            [`aria-label`]: name,
          }}
        />
      </MuiPickersUtilsProvider>
    </Box>
  );
};
