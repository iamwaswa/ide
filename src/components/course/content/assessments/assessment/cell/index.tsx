import { TableCell, Typography } from '@material-ui/core';

import React from 'react';

interface IProps {
  content: string;
}

export const Cell: React.FC<IProps> = ({ content }) => (
  <TableCell align="left">
    <Typography variant="body2" component="span">
      {content}
    </Typography>
  </TableCell>
);
