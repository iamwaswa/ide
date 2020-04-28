import { Callback, CourseNavigationDrawerSection } from '@types';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';

import React from 'react';
import { useNavigationDrawer } from './hooks';
import { useStyles } from './styles';

interface IProps {
  sections: Array<CourseNavigationDrawerSection>;
  currentSection: CourseNavigationDrawerSection;
  setCurrentSection: Callback<CourseNavigationDrawerSection, void>;
}

export const NavigationDrawer: React.FC<IProps> = ({
  sections,
  currentSection,
  setCurrentSection,
}) => {
  const classes = useStyles({ currentSection });
  const renderIcon = useNavigationDrawer({ currentSection });

  const handleSectionChange = (
    name: CourseNavigationDrawerSection
  ): (() => void) => () => {
    setCurrentSection(name);
  };

  return (
    <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent">
      <List>
        {sections.map((name) => (
          <ListItem
            className={
              currentSection === name
                ? classes.listItem
                : classes.listItemDefault
            }
            autoFocus={currentSection === name}
            button
            key={name}
            onClick={handleSectionChange(name)}
          >
            <ListItemIcon className={classes.listItemIcon}>
              {renderIcon(name)}
            </ListItemIcon>
            <ListItemText
              primary={`${name.substring(0, 1).toUpperCase()}${name.substring(
                1
              )}`}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
