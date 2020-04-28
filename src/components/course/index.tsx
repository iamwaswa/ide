import { CompleteCourse, CourseNavigationDrawerSection } from '@types';

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
  >(Object.keys(course)[0] as CourseNavigationDrawerSection);

  return (
    <PageLayout>
      <Box className={classes.container}>
        <NavigationDrawer
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          sections={Object.keys(course) as Array<CourseNavigationDrawerSection>}
        />
        <Content
          currentSection={currentSection}
          course={course as CompleteCourse}
        />
      </Box>
    </PageLayout>
  );
};
