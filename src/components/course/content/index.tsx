import { CompleteCourse, CourseNavigationDrawerSection, OrNull } from '@types';

import { AssessmentEnum } from '@enums';
import { Assessments } from './assessments';
import { Box } from '@material-ui/core';
import { Overview } from './overview';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  currentSection: CourseNavigationDrawerSection;
  course: CompleteCourse;
}

export const Content: React.FC<IProps> = ({ currentSection, course }) => {
  const classes = useStyles();

  const renderSection = (
    section: CourseNavigationDrawerSection
  ): OrNull<JSX.Element> => {
    if (section === `overview`) {
      return <Overview overview={course.overview} subTitle={course.subTitle} />;
    }

    if (section === `assignments` || section === `quizzes`) {
      return (
        <Assessments
          assessments={course[section]}
          type={
            section === `assignments`
              ? AssessmentEnum.ASSIGNMENT
              : AssessmentEnum.QUIZ
          }
        />
      );
    }

    return null;
  };

  return (
    <Box
      className={classes.root}
      role="section"
      id={`section-${currentSection}`}
      aria-labelledby={`${currentSection}`}
    >
      {renderSection(currentSection)}
    </Box>
  );
};
