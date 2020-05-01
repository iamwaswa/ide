import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { Callback, EmailData, User } from '@types';

import React from 'react';
import { Recipients } from './recipients';
import { Text } from './text';
import { useEmailForm } from './hooks';
import { useStyles } from './styles';

interface IProps {
  openEmailClient: boolean;
  setOpenEmailClient: Callback<boolean, void>;
  possibleRecipients: Array<User>;
  sendEmailAsync: Callback<EmailData, void>;
}

export const EmailForm: React.FC<IProps> = ({ openEmailClient, ...props }) => {
  const {
    recipients,
    subject,
    message,
    handleRecipientsChange,
    handleTextChange,
    handleSendEmail,
    closeEmailDialog,
  } = useEmailForm({ ...props });
  const classes = useStyles();

  return (
    <Dialog
      open={openEmailClient}
      onClose={closeEmailDialog}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle classes={{ root: classes.dialogTitleRoot }}>
        Send Email
      </DialogTitle>
      <form onSubmit={handleSendEmail}>
        <DialogContent classes={{ root: classes.dialogContentRoot }}>
          <Recipients
            possibleRecipients={props.possibleRecipients}
            recipients={recipients}
            handleRecipientsChange={handleRecipientsChange}
          />
          <Text
            id="subject"
            label="Subject"
            value={subject}
            onChange={handleTextChange(`subject`)}
          />
          <Text
            id="message"
            label="Message"
            multiline={true}
            rows={6}
            value={message}
            variant="outlined"
            onChange={handleTextChange(`message`)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEmailDialog} color="inherit">
            Cancel
          </Button>
          <Button type="submit" color="inherit">
            Send
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
