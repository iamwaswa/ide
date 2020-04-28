import { AssessmentEnum, RoleEnum } from '@enums';
import { Assignment, Quiz } from '@types';

import { Actions } from './actions';
import { AssessmentGrade } from './grade';
import { AssessmentLink } from './link';
import { Cell } from './cell';
import { Comments } from './comments';
import React from 'react';
import { Submissions } from './submissions';
import { TableRow } from '@material-ui/core';
import { ToggleFeedback } from './toggleFeedback';
import { useAssessment } from './hooks';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  assessment: Assignment | Quiz;
}

export const AssessmentItem: React.FC<IProps> = ({ assessment }) => {
  const { role } = useAuthContext();
  const classes = useStyles();
  const {
    dueDate,
    startDate,
    duration,
    submission,
    setShowComments,
    showComments,
  } = useAssessment({ assessment });
  const [showSubmissions, setShowSubmissions] = React.useState(false);

  return (
    <>
      <TableRow className={classes.root}>
        <Actions
          type={assessment.type}
          showSubmissions={showSubmissions}
          setShowSubmissions={setShowSubmissions}
        />
        {role === RoleEnum.STUDENT ? (
          <AssessmentLink assessment={assessment} />
        ) : (
          <Cell content={assessment.name} />
        )}
        <Cell
          content={
            assessment.type === AssessmentEnum.QUIZ ? startDate : dueDate
          }
        />
        {assessment.type === AssessmentEnum.QUIZ && <Cell content={duration} />}
        <AssessmentGrade grade={submission?.grade} />
        {role === RoleEnum.STUDENT && (
          <ToggleFeedback
            submission={submission}
            setShowComments={setShowComments}
          />
        )}
      </TableRow>
      {role === RoleEnum.STUDENT && (
        <Comments
          comments={submission?.feedback?.comments}
          showComments={showComments}
        />
      )}
      {role === RoleEnum.INSTRUCTOR && (
        <Submissions
          assessment={assessment}
          show={showSubmissions}
          submissions={assessment.submissions}
        />
      )}
    </>
  );
};
