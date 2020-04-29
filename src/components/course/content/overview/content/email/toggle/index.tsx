import { Callback } from '@types';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import { Fab } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  setOpenEmailClient: Callback<boolean, void>;
}

export const ToggleEmail: React.FC<IProps> = ({ setOpenEmailClient }) => {
  const classes = useStyles();

  const handleOpenEmailDialog = (): void => setOpenEmailClient(true);

  return (
    <Fab
      aria-label="email"
      className={classes.toggleEmail}
      color="primary"
      variant="extended"
      onClick={handleOpenEmailDialog}
    >
      <EmailRoundedIcon className={classes.toggleEmailIcon} />
      Email
    </Fab>
  );
};
