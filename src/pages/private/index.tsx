import { Assessment } from '@components/assessment';
import { Course } from '@components/course';
import { Courses } from '@components/courses';
import React from 'react';
import { Router } from '@reach/router';

const PrivatePage: React.FC = () => (
  <Router>
    <Courses path="/private/courses" />
    <Course path="/private/course" />
    <Assessment path="/private/assessment" />
  </Router>
);

PrivatePage.displayName = `PrivatePage`;

export default PrivatePage;
