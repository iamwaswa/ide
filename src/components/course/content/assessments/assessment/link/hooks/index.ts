import { AssessmentEnum, RoleEnum } from '@enums';

import { OrNull } from '@types';
import React from 'react';
import { useAuthContext } from '@context/auth/hooks';

interface IArgs {
  type: AssessmentEnum;
  startDate?: Date;
}

export const useAssessmentLink = ({
  startDate = new Date(),
  type,
}: IArgs): boolean => {
  const { role } = useAuthContext();

  const updateLocked = (
    currentRole: OrNull<RoleEnum>,
    currentType: AssessmentEnum,
    date: Date
  ): boolean =>
    currentRole === RoleEnum.STUDENT &&
    currentType === AssessmentEnum.QUIZ &&
    Date.now() < date.getTime();

  const [locked, setLocked] = React.useState(
    updateLocked(role, type, startDate)
  );

  React.useEffect((): void => {
    setLocked(updateLocked(role, type, startDate));
  }, [role, startDate, type]);

  return locked;
};
