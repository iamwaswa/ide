import { Assessment } from '@components/assessment';
import { Course } from '@components/course';
import { Courses } from '@components/courses';
import { PrivateRoute } from '@components/privateRoute';
import React from 'react';
import { Router } from '@reach/router';
import { RoutesEnum } from '@enums';

const PrivatePage: React.FC = () => (
  <Router>
    <PrivateRoute Component={Courses} path={RoutesEnum.COURSES} />
    <PrivateRoute Component={Course} path={RoutesEnum.COURSE} />
    <PrivateRoute Component={Assessment} path={RoutesEnum.ASSESSMENT} />
  </Router>
);

PrivatePage.displayName = `PrivatePage`;

export default PrivatePage;
