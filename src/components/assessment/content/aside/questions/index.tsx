import { AsideViewEnum, RoleEnum } from '@enums';
import { Box, Fade, Typography } from '@material-ui/core';

import { QuestionNavigation } from './navigation';
import { Quill } from '@components/quill';
import { QuillLoader } from '@components/quill/loader';
import React from 'react';
import { useAssessmentContext } from '@components/assessment/context/hooks';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  rootStyle: string;
  view: AsideViewEnum;
}

export const Questions: React.FC<IProps> = ({ rootStyle, view }) => {
  const { assessment } = useAssessmentContext();
  const { role } = useAuthContext();
  const classes = useStyles({ view, student: role === RoleEnum.STUDENT });
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
      <Box className={`${rootStyle} ${classes.questionsContainer}`}>
        <Box className={classes.question}>
          <QuillLoader load={true} />
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
