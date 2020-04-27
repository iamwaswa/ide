import { Breadcrumbs, Typography } from '@material-ui/core';

import { Link } from 'gatsby';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import { useNavigation } from './hooks';

export const NavigationMenu: React.FC = () => {
  const path = useNavigation();

  return path.size > 0 ? (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextIcon fontSize="small" />}
    >
      {Object.entries(path).map(
        ([key, value]: [string, string]): JSX.Element =>
          value ? (
            <Link key={key} color="textPrimary" to={value}>
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
