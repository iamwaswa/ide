import AssessmentIcon from '@material-ui/icons/Assessment';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { CourseNavigationDrawerSection } from '@types';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React from 'react';
import { useStyles } from '../styles';

interface IArgs {
  currentSection: CourseNavigationDrawerSection;
}

type IUseNavigationDrawer = (
  section: CourseNavigationDrawerSection
) => JSX.Element;

export const useNavigationDrawer = ({
  currentSection,
}: IArgs): IUseNavigationDrawer => {
  const classes = useStyles({ currentSection });
  const icons = React.useRef({
    overview: DashboardIcon,
    assignments: AssignmentIcon,
    quizzes: AssessmentIcon,
  });

  const renderIcon = (section: CourseNavigationDrawerSection): JSX.Element => {
    const Icon = icons.current[section];

    return (
      <Icon
        className={
          currentSection === section ? classes.icon : classes.iconDefault
        }
        fontSize="large"
      />
    );
  };

  return renderIcon;
};
