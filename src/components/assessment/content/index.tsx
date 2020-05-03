import { Aside } from './aside';
import { AssessmentEnum } from '@enums';
import { Fade } from '@material-ui/core';
import { QuizPrompt } from './quizPrompt';
import React from 'react';
import { useAssessmentContext } from '../context/hooks';

export const Content: React.FC = () => {
  const { assessment } = useAssessmentContext();
  const [showQuizPrompt, setShowQuizPrompt] = React.useState<boolean>(
    assessment?.type === AssessmentEnum.QUIZ
  );

  const hideQuizPrompt = (): void => setShowQuizPrompt(false);

  return (
    <>
      {showQuizPrompt ? (
        <Fade in={true} timeout={500} mountOnEnter={true} unmountOnExit={true}>
          <QuizPrompt hideQuizPrompt={hideQuizPrompt} />
        </Fade>
      ) : (
        <Fade
          in={!showQuizPrompt}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Aside />
        </Fade>
      )}
    </>
  );
};
