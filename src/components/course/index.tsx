import {
  Assignment,
  CompleteCourse,
  CourseNavigationDrawerSection,
  Quiz,
} from '@types';

import { AssessmentEnum } from '@enums';
import { Box } from '@material-ui/core';
import { Content } from './content';
import { NavigationDrawer } from './navigationDrawer';
import { PageLayout } from '@layouts/page';
import React from 'react';
import course from './data.json';
import { useStyles } from './styles';

export const Course: React.FC = () => {
  const classes = useStyles();
  const [currentSection, setCurrentSection] = React.useState<
    CourseNavigationDrawerSection
  >(`overview`);
  const { overview, assignments, quizzes, students, ...data } = course;
  const updatedAssignments = assignments.map(
    (assignment: any): Assignment => ({
      ...assignment,
      type: AssessmentEnum.ASSIGNMENT,
      dueDate: new Date(assignment.dueDate),
    })
  );
  const updatedQuizzes = quizzes.map(
    (quiz: any): Quiz => ({
      ...quiz,
      type: AssessmentEnum.QUIZ,
      startDate: new Date(quiz.startDate),
    })
  );

  return (
    <PageLayout>
      <Box className={classes.container}>
        <NavigationDrawer
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          sections={[`overview`, `assignments`, `quizzes`]}
        />
        <Content
          currentSection={currentSection}
          course={
            {
              ...data,
              overview,
              students,
              assignments: updatedAssignments,
              quizzes: updatedQuizzes,
            } as CompleteCourse
          }
        />
      </Box>
    </PageLayout>
  );
};
