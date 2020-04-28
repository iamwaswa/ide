import { AssessmentEnum, RoleEnum } from '@enums';
import { TableCell, TableHead, TableRow, Typography } from '@material-ui/core';

import React from 'react';
import { useAuthContext } from '@context/auth/hooks';

interface IProps {
  type: AssessmentEnum;
}

export const Headers: React.FC<IProps> = ({ type }) => {
  const { role } = useAuthContext();

  return (
    <TableHead>
      <TableRow>
        {role === RoleEnum.INSTRUCTOR && (
          <TableCell>
            <Typography variant="h6">Actions</Typography>
          </TableCell>
        )}
        <TableCell>
          <Typography variant="h6">Name</Typography>
        </TableCell>
        <TableCell>
          <Typography variant="h6">
            {type === AssessmentEnum.QUIZ ? `Start Date` : `Due Date`}
          </Typography>
        </TableCell>
        {type === AssessmentEnum.QUIZ && (
          <TableCell>
            <Typography variant="h6">Duration</Typography>
          </TableCell>
        )}
        {role === RoleEnum.STUDENT && (
          <>
            <TableCell>
              <Typography variant="h6">Score</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Total</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">Feedback</Typography>
            </TableCell>
          </>
        )}
      </TableRow>
    </TableHead>
  );
};
