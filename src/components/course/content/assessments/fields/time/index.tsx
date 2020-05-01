import { Action, ActionEnum } from '../reducer';
import { AssessmentEnum, DurationUnitEnum } from '@enums';

import { Box } from '@material-ui/core';
import { Callback } from '@types';
import { DateItem } from './date';
import { DurationUnitItem } from './durationUnit';
import React from 'react';
import { TextItem } from '../item/text';
import { useStyles } from './styles';

interface IProps {
  type: AssessmentEnum;
  updateFields: Callback<Action, void>;
  dueDate?: Date;
  duration?: number;
  durationUnit?: DurationUnitEnum;
  startDate?: Date;
}

export const TimeItems: React.FC<IProps> = ({
  type,
  updateFields,
  dueDate,
  duration,
  durationUnit,
  startDate,
}) => {
  const quiz = React.useMemo((): boolean => type === AssessmentEnum.QUIZ, [
    type,
  ]);
  const classes = useStyles();

  const handleDurationChange = (): Callback<
    React.ChangeEvent<HTMLInputElement>,
    void
  > => (event: React.ChangeEvent<HTMLInputElement>): void => {
    updateFields({
      type: ActionEnum.DURATION_CHANGE,
      value: Number(event.target.value),
    });
  };

  return (
    <Box className={classes.timeContainer}>
      <DateItem
        label={`${quiz ? `Start` : `Due`} date`}
        name={`${quiz ? `start` : `due`}Date`}
        value={quiz ? startDate : dueDate}
        updateFields={updateFields}
      />
      {quiz && (
        <>
          <TextItem
            label="Duration"
            name="duration"
            value={duration}
            variant="standard"
            type="number"
            handleChange={handleDurationChange}
          />
          <DurationUnitItem value={durationUnit} updateFields={updateFields} />
        </>
      )}
    </Box>
  );
};
