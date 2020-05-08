import { Box, Fade, Typography } from '@material-ui/core';

import { AsideViewEnum } from '@enums';
import { QuestionNavigation } from './navigation';
import { Quill } from '@components/quill';
import React from 'react';
import { useAssessmentContext } from '@components/assessment/context/hooks';
import { useStyles } from './styles';

interface IProps {
  rootStyle: string;
  showLoader: boolean;
  hideLoader: () => void;
  view: AsideViewEnum;
}

export const Questions: React.FC<IProps> = ({
  rootStyle,
  showLoader,
  hideLoader,
  view,
}) => {
  const { assessment } = useAssessmentContext();
  const classes = useStyles({ view });
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState<
    number
  >(0);

  return assessment ? (
    <Fade
      in={view !== AsideViewEnum.GRADING}
      timeout={500}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Box
        className={`${rootStyle} ${classes.questionsContainer} ${
          view === AsideViewEnum.SPLIT ? classes.extraMargin : ``
        }`}
      >
        <Box className={classes.question}>
          <Quill
            label={
              <Typography variant="h6">{`Question ${
                currentQuestionIndex + 1
              }`}</Typography>
            }
            labelClasses={{
              root: classes.labelRoot,
              labelPlacementTop: classes.labelPlacementTop,
            }}
            showQuillLoader={showLoader}
            hideQuillLoader={hideLoader}
            question={assessment.questions[currentQuestionIndex]}
            theme="bubble"
          />
        </Box>
        {assessment.questions.length > 1 && (
          <QuestionNavigation
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            maxNumQuestions={assessment.questions.length}
          />
        )}
      </Box>
    </Fade>
  ) : null;
};
