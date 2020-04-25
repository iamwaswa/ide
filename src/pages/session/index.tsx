import { Assessment } from '@components/assessment';
import { Course } from '@components/course';
import { Courses } from '@components/courses';
import { PrivateRoute } from '@components/privateRoute';
import React from 'react';
import { Router } from '@reach/router';

const PrivatePage: React.FC = () => (
  <Router>
    <PrivateRoute Component={Courses} path="/session/courses/:uid" />
    <PrivateRoute Component={Course} path="/session/course/:uid/:courseId" />
    <PrivateRoute
      Component={Assessment}
      path="/session/assessment/:uid/:courseId/:assessmentId"
    />
  </Router>
);

PrivatePage.displayName = `PrivatePage`;

export default PrivatePage;
