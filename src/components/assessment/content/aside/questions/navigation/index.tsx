import { Box, Button } from '@material-ui/core';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  currentQuestionIndex: number;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  maxNumQuestions: number;
}

export const QuestionNavigation: React.FC<IProps> = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  maxNumQuestions,
}) => {
  const classes = useStyles();
  const PREVIOUS = React.useRef(-1);
  const NEXT = React.useRef(1);

  const updateQuestion = (update: number): (() => void) => (): void =>
    setCurrentQuestionIndex(
      (currentIndex: number): number => currentIndex + update
    );

  return (
    <Box className={classes.root}>
      {currentQuestionIndex > 0 && (
        <Button
          color="primary"
          variant="outlined"
          size="small"
          onClick={updateQuestion(PREVIOUS.current)}
        >
          Previous
        </Button>
      )}
      {currentQuestionIndex + 1 < maxNumQuestions && (
        <Box className={currentQuestionIndex > 0 ? classes.backMargin : ``}>
          <Button
            color="primary"
            variant="contained"
            size="small"
            onClick={updateQuestion(NEXT.current)}
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
};
