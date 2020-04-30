import { AssessmentEnum, RoutesEnum } from '@enums';
import { Assignment, Quiz } from '@types';
import { Box, Link, TableCell } from '@material-ui/core';

import React from 'react';
import { Utils } from '@utils';
import { navigate } from 'gatsby';
import { useAssessmentLink } from './hooks';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  assessment: Assignment | Quiz;
}

export const AssessmentLink: React.FC<IProps> = ({ assessment }) => {
  const { assessmentId, courseId, uid } = useAuthContext();
  const disabledAssessment = useAssessmentLink({
    startDate:
      assessment.type === AssessmentEnum.QUIZ
        ? (assessment as Quiz).startDate
        : undefined,
    type: assessment.type,
  });
  const classes = useStyles();

  const goToAssessmentPage = () => {
    if (uid && courseId && assessmentId) {
      navigate(
        Utils.createNavigationPath({
          route: RoutesEnum.ASSESSMENT,
          uid,
          courseId,
          assessmentId,
        })
      );
    }
    /*setAssessment({
      id: props.id,
      durationInSeconds: props.durationInSeconds,
      dueDate: props.dueDate,
      name: props.name,
      type: props.type,
      script: props.script,
      student: props.submissions[0].student,
      file:
        props.submissions.length === 1 && props.submissions[0].file.props
          ? props.submissions[0].file
          : props.file,
      questions: props.questions,
      studentTestCases:
        props.submissions.length === 1 && props.submissions[0].testCases
          ? props.submissions[0].testCases
          : [],
      overlay: false,
      start: false,
    });*/
  };

  return (
    <TableCell>
      <Box>
        <Link
          className={disabledAssessment ? classes.disabled : ``}
          disabled={disabledAssessment}
          component="button"
          variant="body2"
          onClick={goToAssessmentPage}
        >
          {assessment.name}
        </Link>
      </Box>
    </TableCell>
  );
};
