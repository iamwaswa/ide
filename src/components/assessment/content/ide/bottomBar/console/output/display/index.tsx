import React from 'react';
import { TestCases } from './testCases';
import { Typography } from '@material-ui/core';

interface IProps {
  compileCode: any;
}

export const OutputDisplay: React.FC<IProps> = ({ compileCode }) => {
  return (
    <>
      {compileCode.map(({ title, outputs }: any) => (
        <React.Fragment key={title}>
          <Typography variant="subtitle1">{title}</Typography>
          <TestCases outputs={outputs} title={title} />
        </React.Fragment>
      ))}
    </>
  );
};
