import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Callback, User } from '@types';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  possibleRecipients: Array<User>;
  recipients: Set<string>;
  handleRecipientsChange: Callback<React.ChangeEvent<{ value: unknown }>, void>;
}

export const Recipients: React.FC<IProps> = ({
  possibleRecipients,
  recipients,
  handleRecipientsChange,
}) => {
  const displayUser = React.useCallback(
    ({ email, displayName }: User): string => `${displayName} <${email}>`,
    []
  );
  const classes = useStyles();

  return (
    <FormControl fullWidth={true} margin="normal">
      <InputLabel id="recipients-label">Recipient(s)</InputLabel>
      <Select
        autoFocus={true}
        fullWidth={true}
        id="recipients"
        labelId="recipients-label"
        multiple={true}
        value={recipients.size === 0 ? [``] : Array.from(recipients)}
        renderValue={(): JSX.Element => (
          <Box className={classes.recipientsContainer}>
            {recipients.size === 0 ? (
              <Chip label="No recipient(s) selected" />
            ) : (
              possibleRecipients
                .filter(({ email }: User): boolean => recipients.has(email))
                .map(
                  (user: User): JSX.Element => (
                    <Chip
                      key={user.email}
                      color="primary"
                      label={displayUser(user)}
                    />
                  )
                )
            )}
          </Box>
        )}
        required={true}
        onChange={handleRecipientsChange}
      >
        {possibleRecipients.map(
          (user: User): JSX.Element => (
            <MenuItem key={user.email} value={user.email}>
              {displayUser(user)}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};
