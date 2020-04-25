import { Assessment } from '@components/assessment';
import { Course } from '@components/course';
import { Courses } from '@components/courses';
import React from 'react';
import { Router } from '@reach/router';
import { navigate } from 'gatsby';
import { useAuth } from '@context/auth/hooks';

const PrivatePage: React.FC = () => {
  const { role, uid } = useAuth();

  React.useEffect((): void => {
    if (role === null && !uid) {
      navigate(`/`);
      return;
    }
  }, []);

  return (
    <Router>
      <Courses path="/private/courses" />
      <Course path="/private/course" />
      <Assessment path="/private/assessment" />
    </Router>
  );
};

PrivatePage.displayName = `PrivatePage`;

export default PrivatePage;
