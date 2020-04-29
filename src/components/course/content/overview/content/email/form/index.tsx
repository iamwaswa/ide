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
    handleSubjectChange,
    handleMessageChange,
    handleSendEmail,
    closeEmailDialog,
  } = useEmailForm({ ...props });

  return (
    <>
      <Dialog
        open={openEmailClient}
        onClose={closeEmailDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle>Send Email</DialogTitle>
        <form>
          <DialogContent>
            <Recipients
              possibleRecipients={props.possibleRecipients}
              recipients={recipients}
              handleRecipientsChange={handleRecipientsChange}
            />
            <Text
              id="subject"
              label="Subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <Text
              id="message"
              label="Message"
              multiline={true}
              rows={6}
              value={message}
              onChange={handleMessageChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeEmailDialog} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary" onClick={handleSendEmail}>
              Send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
