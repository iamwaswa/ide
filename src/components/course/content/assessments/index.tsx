import { Assignment, Quiz } from '@types';
import { Box, Fade, Table, TableBody } from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import { AssessmentItem } from './assessment';
import { Fields } from './fields';
import { Headers } from './headers';
import React from 'react';
import { ToggleAssessmentView } from './toggleAsessmentView';
import { useStyles } from './styles';

interface IProps {
  assessments: Array<Assignment> | Array<Quiz>;
  type: AssessmentEnum;
}

export const Assessments: React.FC<IProps> = ({ assessments, type }) => {
  const classes = useStyles();
  const [showCreate, setShowCreate] = React.useState<boolean>(false);

  React.useEffect((): void => {
    setShowCreate(false);
  }, [type]);

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
    <Fade in={true} timeout={500} mountOnEnter={true} unmountOnExit={true}>
      <Box className={classes.container}>
        <ToggleAssessmentView
          showCreate={showCreate}
          setShowCreate={setShowCreate}
          type={type}
        />
        {showCreate && (
          <Fade
            in={showCreate}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Fields type={type} />
          </Fade>
        )}
        {!showCreate && (
          <Fade
            in={!showCreate}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Table>
              <Headers type={type} />
              <TableBody>{renderAssessments()}</TableBody>
            </Table>
          </Fade>
        )}
      </Box>
    </Fade>
  );
};
