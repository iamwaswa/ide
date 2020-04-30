import { Action, ActionEnum } from '../../reducer';
import { Box, Fab, IconButton, TextField, Tooltip } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import { Callback } from '@types';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import React from 'react';
import { v4 as uniqueId } from 'uuid';
import { useStyles } from './styles';

interface IProps {
  questions: Map<string, string>;
  updateFields: Callback<Action, void>;
}

export const QuestionsItem: React.FC<IProps> = ({
  questions,
  updateFields,
}) => {
  const classes = useStyles();

  const handleAddQuestion = (): void => {
    updateFields({ type: ActionEnum.ADD_QUESTION, id: uniqueId() });
  };

  const handleUpdateQuestion = (
    id: string
  ): Callback<React.ChangeEvent<{ value: unknown }>, void> => (
    event: React.ChangeEvent<{ value: unknown }>
  ): void => {
    updateFields({
      type: ActionEnum.QUESTIONS_CHANGE,
      id,
      content: event.target.value as string,
    });
  };

  const handleDeleteQuestion = (id: string): (() => void) => (): void => {
    updateFields({ type: ActionEnum.DELETE_QUESTION, id });
  };

  return (
    <Box className={classes.questionsContainer}>
      {Array.from(questions.entries()).map(
        ([id, question]: [string, string], index: number): JSX.Element => (
          <Box key={id} className={classes.question}>
            <Tooltip placement="top" title={`Delete question ${index + 1}`}>
              <IconButton onClick={handleDeleteQuestion(id)}>
                <DeleteRoundedIcon color="secondary" />
              </IconButton>
            </Tooltip>
            <TextField
              helperText="Write detailed instructions for students to follow"
              label={`Question ${index + 1}`}
              multiline={true}
              rows={5}
              value={question}
              variant="outlined"
              onChange={handleUpdateQuestion(id)}
            />
          </Box>
        )
      )}
      <Fab
        className={`${classes.addQuestion} ${
          questions.size > 0 ? classes.addQuestionShifted : ``
        }`}
        color="secondary"
        variant="extended"
        onClick={handleAddQuestion}
      >
        <AddIcon color="inherit" />
        Add question
      </Fab>
    </Box>
  );
};
