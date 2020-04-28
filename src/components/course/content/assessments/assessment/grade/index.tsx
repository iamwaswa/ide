import { Cell } from '../cell';
import { Grade } from '@types';
import React from 'react';
import { RoleEnum } from '@enums';
import { useAuthContext } from '@context/auth/hooks';

interface IProps {
  grade?: Grade;
}

export const AssessmentGrade: React.FC<IProps> = ({ grade }) => {
  const { role } = useAuthContext();

  return role === RoleEnum.STUDENT ? (
    <>
      <Cell content={grade?.score.toString() ?? `-`} />
      <Cell content={grade?.total.toString() ?? `-`} />
    </>
  ) : null;
};
