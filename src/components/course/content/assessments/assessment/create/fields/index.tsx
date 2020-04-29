import { ActionEnum, initialState, reducer } from './reducer';
import { Box, Fade, Typography } from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import { Callback } from '@types';
import { FileItem } from './item/file';
import { QuestionItem } from './item/question';
import React from 'react';
import { ScriptItem } from './item/script';
import { SubmitPrompt } from './submit/prompt';
import { TextItem } from './item/text';
import { useStyles } from './styles';

interface IProps {
  type: AssessmentEnum;
}

export const Fields: React.FC<IProps> = ({ type }) => {
  const [fields, updateFields] = React.useReducer(reducer, initialState);
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
    <Fade
      in={true}
      timeout={600}
      mountOnEnter
      unmountOnExit
      style={{ margin: '10px' }}
    >
      <Box>
        <Typography variant="h4">
          Create{' '}
          {`${type.substring(0, 1).toUpperCase()}${type
            .substring(1)
            .toLowerCase()}`}
        </Typography>
        <Box className={classes.input}>
          <TextItem
            id="assessment-name"
            label="Name"
            name="name"
            value={fields.name}
            handleChange={handleChange}
          />
          {type === AssessmentEnum.QUIZ && (
            <TextItem
              disabled={type !== AssessmentEnum.QUIZ}
              id="duration"
              label="Duration (minutes)"
              name="durationInSeconds"
              value={fields.durationInSeconds}
              type="number"
              handleChange={handleChange}
            />
          )}
          <FileItem
            addMargin={classes.addMargin}
            file={fields.file}
            type={type}
            updateFields={updateFields}
          />
        </Box>
        <QuestionItem fields={fields} setFields={updateFields} index="1" />
        <QuestionItem fields={fields} setFields={updateFields} index="2" />
        <QuestionItem fields={fields} setFields={updateFields} index="3" />
        <ScriptItem fields={fields} setFields={updateFields} />
        <SubmitPrompt fields={fields} />
      </Box>
    </Fade>
  );
};
