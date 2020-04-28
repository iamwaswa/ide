import { Callback, User } from '@types';
import { InputLabel, MenuItem, Select } from '@material-ui/core';

import React from 'react';

interface IProps {
  possibleRecipients: Array<User>;
  recipients: Set<User>;
  handleRecipientsChange: Callback<React.ChangeEvent<{ value: unknown }>, void>;
}

export const Recipients: React.FC<IProps> = ({
  possibleRecipients,
  recipients,
  handleRecipientsChange,
}) => {
  return (
    <>
      <InputLabel id="recipient-label" required>
        Recipient(s)
      </InputLabel>
      <Select
        required={true}
        autoFocus={true}
        labelId="recipient-label"
        label="Recipient(s)"
        id="emailRecipient"
        value={Array.from(recipients).map((recipient: User): string =>
          JSON.stringify(recipient)
        )}
        onChange={handleRecipientsChange}
        multiple={true}
        fullWidth={true}
      >
        {possibleRecipients.map(
          ({ displayName, email }: User): JSX.Element => (
            <MenuItem
              key={email}
              value={JSON.stringify({ displayName, email })}
            >
              {displayName}
            </MenuItem>
          )
        )}
      </Select>
    </>
  );
};
