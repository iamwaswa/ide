import { Assignment, Quiz } from '@types';
import { Fade, Table, TableBody } from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import { AssessmentItem } from './assessment';
import { Headers } from './headers';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  assessments: Array<Assignment> | Array<Quiz>;
  type: AssessmentEnum;
}

export const Assessments: React.FC<IProps> = ({ assessments, type }) => {
  const classes = useStyles();

  const renderAssessments = (): JSX.Element => {
    const assessmentsToDisplay: Array<JSX.Element> = [];

    assessments.forEach((assessment: Assignment | Quiz): void => {
      assessmentsToDisplay.push(
        <AssessmentItem key={assessment.id} assessment={assessment} />
      );
    });

    return <>{assessmentsToDisplay}</>;
  };

  return (
    <Fade in={true} timeout={600} mountOnEnter unmountOnExit>
      <Table className={classes.root}>
        <Headers type={type} />
        <TableBody>{renderAssessments()}</TableBody>
      </Table>
    </Fade>
  );
};
