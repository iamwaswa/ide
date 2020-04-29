import { Box, Button, Fade } from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import { Fields } from './fields';
import React from 'react';

interface IProps {
  type: AssessmentEnum;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateAssessment: React.FC<IProps> = ({
  type,
  checked,
  setChecked,
}) => {
  const handleClick = (): void =>
    setChecked((currentlyChecked: boolean): boolean => !currentlyChecked);

  return (
    <Box>
      <Fade in={!checked} mountOnEnter={true} unmountOnExit={true}>
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
          >{`Create ${type.substring(0, 1).toUpperCase()}${type
            .substring(1)
            .toLowerCase()}`}</Button>
        </Box>
      </Fade>
      <Fade in={checked} mountOnEnter={true} unmountOnExit={true}>
        <Fields type={type} />
      </Fade>
    </Box>
  );
};
