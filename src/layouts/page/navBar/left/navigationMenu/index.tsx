import { Breadcrumbs, Typography } from '@material-ui/core';

import { Link } from 'gatsby';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import { useNavigation } from './hooks';
import { usePathContext } from '@context/path/hooks';
import { useStyles } from './styles';

export const NavigationMenu: React.FC = () => {
  useNavigation();
  const { path } = usePathContext();
  const classes = useStyles();

  return path.size > 0 ? (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {Array.from(path.entries()).map(
        ([key, value]: [string, string]): JSX.Element =>
          value ? (
            <Link
              key={key}
              className={classes.link}
              color="textPrimary"
              to={value}
            >
              {key}
            </Link>
          ) : (
            <Typography key={key} color="textSecondary">
              {key}
            </Typography>
          )
      )}
    </Breadcrumbs>
  ) : null;
};
