import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { useStyles } from '../../../../styles';

export const DateItem = ({ fields, setFields, type }) => {
  const classes = useStyles();
  const handleDateChange = (field) => (date) => {
    setFields({
      ...fields,
      [field]: date,
    });
  };
  return (
    <div className={`${classes.input} ${classes.addMargin}`}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          id="dates"
          label={type === `quiz` ? 'Start Date' : 'Due Date'}
          value={type === `quiz` ? fields.startDate : fields.dueDate}
          onChange={
            type === `quiz`
              ? handleDateChange(`startDate`)
              : handleDateChange(`dueDate`)
          }
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};
