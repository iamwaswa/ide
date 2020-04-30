import { ActionEnum, initialState, reducer } from './reducer';
import { Box, Fade, Typography } from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import { Callback } from '@types';
import { DateItem } from './item/date';
import { DurationUnitItem } from './item/durationUnit';
import { FileItem } from './item/file';
import { QuestionsItem } from './item/questions';
import React from 'react';
import { ScriptItem } from './item/script';
import { SubmitPrompt } from './submit/prompt';
import { TextItem } from './item/text';
import { useStyles } from './styles';

interface IProps {
  type: AssessmentEnum;
}

export const Fields: React.FC<IProps> = ({ type }) => {
  const quiz = React.useMemo((): boolean => type === AssessmentEnum.QUIZ, [
    type,
  ]);
  const title = React.useMemo(
    (): string =>
      `${type.substring(0, 1).toUpperCase()}${type.substring(1).toLowerCase()}`,
    [type]
  );
  const [fields, updateFields] = React.useReducer(reducer, initialState(type));
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

  const handleChange = (
    field: string
  ): Callback<React.ChangeEvent<HTMLInputElement>, void> => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    updateFields({
      type: ActionEnum.OTHER_FIELD_CHANGE,
      name: field,
      value: event.target.value,
    });
  };

  return (
    <Fade in={true} timeout={500} mountOnEnter={true} unmountOnExit={true}>
      <Box>
        <Typography variant="h4">{`Create ${title}`}</Typography>
        <Box className={classes.input}>
          <TextItem
            label="Name"
            name="name"
            value={fields.name}
            handleChange={handleChange}
          />
          <DateItem
            addMarginClassName={classes.addMargin}
            inputClassName={classes.input}
            label={`${quiz ? `Start` : `Due`} date`}
            name={`${quiz ? `start` : `due`}Date`}
            value={quiz ? fields.startDate : fields.dueDate}
            updateFields={updateFields}
          />
          {quiz && (
            <Box>
              <TextItem
                label="Duration"
                name="duration"
                value={fields.duration}
                type="number"
                handleChange={handleDurationChange}
              />
              <DurationUnitItem
                addMarginClassName={classes.addMargin}
                value={fields.durationUnit}
                updateFields={updateFields}
              />
            </Box>
          )}
          <FileItem
            addMarginClassName={classes.addMargin}
            file={fields.file}
            updateFields={updateFields}
          />
          <ScriptItem
            addMarginClassName={classes.addMargin}
            updateFields={updateFields}
          />
          <QuestionsItem
            addMarginClassName={classes.addMargin}
            questions={fields.questions}
            updateFields={updateFields}
          />
        </Box>
        <SubmitPrompt fields={fields} type={type} />
      </Box>
    </Fade>
  );
};
