import { Action, ActionEnum } from '../../reducer';
import { Box, Fab, IconButton, TextField } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import { Callback } from '@types';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  addMarginClassName: string;
  questions: Map<string, string>;
  updateFields: Callback<Action, void>;
}

export const QuestionsItem: React.FC<IProps> = ({
  addMarginClassName,
  questions,
  updateFields,
}) => {
  const classes = useStyles();

  const handleAddQuestion = (): void => {
    updateFields({ type: ActionEnum.ADD_QUESTION, id: `` });
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
    <Box className={classes.questionsMargin}>
      {Array.from(questions.entries()).map(
        ([id, question]: [string, string], index: number): JSX.Element => (
          <Box key={id} className={addMarginClassName}>
            <IconButton onClick={handleDeleteQuestion(id)}>
              <DeleteRoundedIcon color="secondary" />
            </IconButton>
            <TextField
              helperText="Write detailed instructions for students to follow"
              label={`Question ${index + 1}`}
              value={question}
              onChange={handleUpdateQuestion(id)}
            />
          </Box>
        )
      )}
      <Fab variant="extended" onClick={handleAddQuestion}>
        <AddIcon color="primary" />
      </Fab>
    </Box>
  );
};
