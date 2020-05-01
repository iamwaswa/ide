import { ActionEnum, initialState, reducer } from './reducer';
import { Box, Fade } from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import { Callback } from '@types';
import { CodeItems } from './code';
import { QuestionsItem } from './item/questions';
import React from 'react';
import { SubmitPrompt } from './submit/prompt';
import { TextItem } from './item/text';
import { TimeItems } from './time';
import { useStyles } from './styles';

interface IProps {
  type: AssessmentEnum;
}

export const Fields: React.FC<IProps> = ({ type }) => {
  const [fields, updateFields] = React.useReducer(reducer, initialState(type));
  const classes = useStyles();

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
      <>
        <Box className={classes.fieldsContainer}>
          <TextItem
            helperText="Enter the name of the assignment"
            label="Name"
            name="name"
            value={fields.name}
            handleChange={handleChange}
          />
          <TimeItems
            dueDate={fields.dueDate}
            duration={fields.duration}
            durationUnit={fields.durationUnit}
            startDate={fields.startDate}
            type={type}
            updateFields={updateFields}
          />
          <CodeItems
            file={fields.file}
            type={type}
            updateFields={updateFields}
          />
          <QuestionsItem
            questions={fields.questions}
            updateFields={updateFields}
          />
          <SubmitPrompt fields={fields} type={type} />
        </Box>
      </>
    </Fade>
  );
};
