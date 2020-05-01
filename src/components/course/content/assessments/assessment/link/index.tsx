import { AssessmentEnum, RoutesEnum } from '@enums';
import { Assignment, Quiz } from '@types';
import { Link, TableCell } from '@material-ui/core';

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
  const [readyToNavigate, setReadyToNavigate] = React.useState<boolean>(false);
  const {
    assessmentId,
    assessmentTitle,
    courseId,
    uid,
    setAssessmentId,
    setAssessmentTitle,
  } = useAuthContext();
  const disabledAssessment = useAssessmentLink({
    startDate:
      assessment.type === AssessmentEnum.QUIZ
        ? (assessment as Quiz).startDate
        : undefined,
    type: assessment.type,
  });
  const classes = useStyles();

  React.useEffect((): void => {
    if (readyToNavigate && uid && courseId && assessmentId && assessmentTitle) {
      navigate(
        Utils.createNavigationPath({
          route: RoutesEnum.ASSESSMENT,
          uid,
          courseId,
          assessmentId,
        }),
        { state: assessment }
      );
    }
  }, [assessmentId, assessmentTitle, courseId, readyToNavigate, uid]);

  const goToAssessmentPage = (): void => {
    setReadyToNavigate(true);
    setAssessmentId(assessment.id);
    setAssessmentTitle(assessment.name);
  };

  return (
    <TableCell>
      <Link
        className={disabledAssessment ? classes.disabled : ``}
        disabled={disabledAssessment}
        component="button"
        variant="body2"
        onClick={goToAssessmentPage}
      >
        {assessment.name}
      </Link>
    </TableCell>
  );
};
