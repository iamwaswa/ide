import { Assessment } from '@components/assessment';
import { CompleteCourse } from '@components/course';
import { Courses } from '@components/courses';
import { PrivateRoute } from '@components/privateRoute';
import React from 'react';
import { Router } from '@reach/router';

const PrivatePage: React.FC = () => (
  <Router>
    <PrivateRoute Component={Courses} path="/session/:uid/courses" />
    <PrivateRoute
      Component={CompleteCourse}
      path="/session/:uid/courses/:courseId"
    />
    <PrivateRoute
      Component={Assessment}
      path="/session/:uid/courses/:courseId/:assessmentId"
    />
  </Router>
);

PrivatePage.displayName = `PrivatePage`;

export default PrivatePage;
