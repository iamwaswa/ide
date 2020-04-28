import { AssessmentEnum, RoleEnum } from '@enums';
import { IconButton, TableCell, Tooltip } from '@material-ui/core';

import { Delete } from './delete';
import GroupIcon from '@material-ui/icons/Group';
import React from 'react';
import { useAuthContext } from '@context/auth/hooks';

interface IProps {
  type: AssessmentEnum;
  showSubmissions: boolean;
  setShowSubmissions: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Actions: React.FC<IProps> = ({
  type,
  showSubmissions,
  setShowSubmissions,
}) => {
  const { role } = useAuthContext();

  const toggleShowSubmissions = () =>
    setShowSubmissions(
      (showingSubmissions: boolean): boolean => !showingSubmissions
    );

  return role === RoleEnum.INSTRUCTOR ? (
    <TableCell>
      <Tooltip
        placement="top"
        title={`${showSubmissions ? `Hide` : `View`} submissions`}
      >
        <IconButton onClick={toggleShowSubmissions}>
          <GroupIcon color="primary" />
        </IconButton>
      </Tooltip>
      <Tooltip placement="top" title={`Delete ${type}`}>
        <Delete />
      </Tooltip>
    </TableCell>
  ) : null;
};
