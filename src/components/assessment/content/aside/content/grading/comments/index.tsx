import { Box, TextField } from '@material-ui/core';

import { AsideViewEnum } from '@enums';
import React from 'react';
import { TabEnum } from '../context/reducer';
import { useGradingContext } from '../context/hooks';

interface IProps {
  constrainWidthClassName: string;
  show: boolean;
  tab: TabEnum;
  view: AsideViewEnum;
}

export const Comments: React.FC<IProps> = ({
  constrainWidthClassName,
  show,
  tab,
  view,
}) => {
  const { comments, updateComments } = useGradingContext();

  return show ? (
    <Box
      role="tab-panel"
      id={`tab-panel-${tab}`}
      aria-labelledby={`${tab}-tab`}
    >
      <TextField
        className={constrainWidthClassName}
        autoFocus={true}
        color="secondary"
        fullWidth={true}
        multiline={true}
        placeholder="Enter comments here..."
        rows={view === AsideViewEnum.GRADING ? 25 : 9}
        size="medium"
        type="text"
        value={comments}
        variant="outlined"
        onChange={updateComments}
      />
    </Box>
  ) : null;
};
