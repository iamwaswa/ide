import { Box, Fade } from '@material-ui/core';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  showComments: boolean;
  comments?: string;
}

export const Comments: React.FC<IProps> = ({ comments, showComments }) => {
  const classes = useStyles();

  return comments ? (
    <Fade in={showComments} timeout={300} mountOnEnter unmountOnExit>
      <Box className={classes.root} component="tr">
        <td className={classes.td} colSpan={100}>
          <strong className={classes.strong}>Comments:</strong> {comments}
        </td>
      </Box>
    </Fade>
  ) : null;
};
