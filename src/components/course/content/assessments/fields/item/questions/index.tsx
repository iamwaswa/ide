import { Action, ActionEnum } from '../../reducer';
import { Box, Fab, IconButton, Tooltip } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import { Callback } from '@types';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Question } from './question';
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
            <Question
              id={id}
              label={`Question ${index + 1}`}
              question={question}
              updateFields={updateFields}
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
