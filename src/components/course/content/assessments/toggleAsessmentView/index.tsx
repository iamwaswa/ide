import { AssessmentEnum, RoleEnum } from '@enums';

import { Button } from '@material-ui/core';
import React from 'react';
import { useAuthContext } from '@context/auth/hooks';

interface IProps {
  showCreate: boolean;
  setShowCreate: React.Dispatch<React.SetStateAction<boolean>>;
  type: AssessmentEnum;
}

export const ToggleAssessmentView: React.FC<IProps> = ({
  showCreate,
  setShowCreate,
  type,
}) => {
  const { role } = useAuthContext();
  const assessment = React.useMemo(
    (): string =>
      `${type.substring(0, 1).toUpperCase()}${type.substring(1).toLowerCase()}`,
    [type]
  );
  const assessmentPlural = React.useMemo(
    (): string =>
      type === AssessmentEnum.QUIZ ? `${assessment}zes` : `${assessment}s`,
    [assessment, type]
  );

  const toggleShowCreate = (): void =>
    setShowCreate((showing: boolean): boolean => !showing);

  return role === RoleEnum.INSTRUCTOR ? (
    <Button color="inherit" onClick={toggleShowCreate}>
      {showCreate ? `View ${assessmentPlural}` : `Create ${assessment}`}
    </Button>
  ) : null;
};
