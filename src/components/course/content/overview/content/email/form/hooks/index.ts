import { ActionEnum, initialState, reducer } from './reducer';
import { Callback, EmailData, User } from '@types';

import React from 'react';

interface IArgs {
  possibleRecipients: Array<User>;
  setOpenEmailClient: Callback<boolean, void>;
  sendEmailAsync: (emailData: EmailData) => void;
}

interface IUseEmailForm {
  recipients: Set<string>;
  subject: string;
  message: string;
  handleRecipientsChange: Callback<React.ChangeEvent<{ value: unknown }>, void>;
  handleTextChange: Callback<
    string,
    Callback<React.ChangeEvent<HTMLInputElement>, void>
  >;
  handleSendEmail: () => void;
  closeEmailDialog: () => void;
}

export const useEmailForm = ({
  possibleRecipients,
  setOpenEmailClient,
  sendEmailAsync,
}: IArgs): IUseEmailForm => {
  const [
    { message, sendingEmail, subject, recipients, resetDone },
    updateState,
  ] = React.useReducer(reducer, initialState);

  React.useEffect((): void => {
    if (!sendingEmail && resetDone) {
      setOpenEmailClient(false);
    }
  }, [resetDone, sendingEmail, setOpenEmailClient]);

  const handleRecipientsChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ): void =>
    updateState({
      type: ActionEnum.UPDATE_RECIPIENTS,
      emails: event.target.value as Array<string>,
    });

  const handleTextChange = (
    name: string
  ): Callback<React.ChangeEvent<HTMLInputElement>, void> => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void =>
    updateState({
      type: ActionEnum.UPDATE_TEXT,
      name,
      value: event.target.value,
    });

  const closeEmailDialog = (): void => updateState({ type: ActionEnum.RESET });

  const handleSendEmail = async () => {
    updateState({ type: ActionEnum.SENDING_EMAIL });
    sendEmailAsync({
      recipients: possibleRecipients.filter(({ email }: User): boolean =>
        recipients.has(email)
      ),
      subject,
      message,
    });
    updateState({ type: ActionEnum.RESET });
  };

  return {
    recipients,
    subject,
    message,
    handleRecipientsChange,
    handleTextChange,
    handleSendEmail,
    closeEmailDialog,
  };
};
