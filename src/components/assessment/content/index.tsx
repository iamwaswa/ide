import { Box, Fade } from '@material-ui/core';

import { Aside } from './aside';
import { AssessmentEnum } from '@enums';
import { IDE } from './ide';
import { IDEStylesContextProvider } from './ide/context';
import { QuizPrompt } from './quizPrompt';
import React from 'react';
import { useAssessmentContext } from '../context/hooks';
import { useStyles } from './styles';

export const Content: React.FC = () => {
  const { assessment } = useAssessmentContext();
  const [showQuizPrompt, setShowQuizPrompt] = React.useState<boolean>(
    assessment?.type === AssessmentEnum.QUIZ
  );
  const [showLoader, setShowLoader] = React.useState<boolean>(true);
  const classes = useStyles();

  const hideLoader = (): void => setShowLoader(false);

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
          <Box className={classes.container}>
            <Aside showLoader={showLoader} hideLoader={hideLoader} />
            <IDEStylesContextProvider>
              <IDE loading={showLoader} />
            </IDEStylesContextProvider>
          </Box>
        </Fade>
      )}
    </>
  );
};
