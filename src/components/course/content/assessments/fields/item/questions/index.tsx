import { Action, ActionEnum } from '../../reducer';
import { Box, Button, Grow } from '@material-ui/core';

import { Callback } from '@types';
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

  return (
    <Box className={classes.questionsContainer}>
      {Array.from(questions.entries()).map(
        ([id, question]: [string, string], index: number): JSX.Element => (
          <Grow
            key={id}
            in={true}
            timeout={600}
            mountOnEnter={true}
            unmountOnExit={true}
            style={{ transformOrigin: `top center` }}
          >
            <Box className={classes.question}>
              <Question
                id={id}
                label={`Question ${index + 1}`}
                question={question}
                updateFields={updateFields}
              />
            </Box>
          </Grow>
        )
      )}
      <Button
        className={`${classes.addQuestion} ${
          questions.size > 0 ? classes.addQuestionShift : ``
        }`}
        color="inherit"
        onClick={handleAddQuestion}
      >
        Add question
      </Button>
    </Box>
  );
};
