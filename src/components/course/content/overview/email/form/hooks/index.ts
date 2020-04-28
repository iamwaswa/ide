import { ActionEnum, initialState, reducer } from './reducer';
import { Callback, EmailData, User } from '@types';

import React from 'react';

interface IArgs {
  setOpenEmailClient: Callback<boolean, void>;
  sendEmailAsync: (emailData: EmailData) => void;
}

interface IUseEmailForm {
  recipients: Set<User>;
  subject: string;
  message: string;
  handleRecipientsChange: Callback<React.ChangeEvent<{ value: unknown }>, void>;
  handleSubjectChange: Callback<React.ChangeEvent<HTMLInputElement>, void>;
  handleMessageChange: Callback<React.ChangeEvent<HTMLInputElement>, void>;
  handleSendEmail: () => void;
  closeEmailDialog: () => void;
}

export const useEmailForm = ({
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
  ) => {
    const { options } = event.target as HTMLSelectElement;
    updateState({ type: ActionEnum.UPDATE_RECIPIENTS, options });
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({
      type: ActionEnum.UPDATE_MESSAGE,
      newMessage: event.target.value,
    });
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateState({
      type: ActionEnum.UPDATE_SUBJECT,
      newSubject: event.target.value,
    });
  };

  const closeEmailDialog = () => {
    updateState({ type: ActionEnum.RESET });
    setOpenEmailClient(false);
  };

  const handleSendEmail = async () => {
    updateState({ type: ActionEnum.SENDING_EMAIL });
    sendEmailAsync({ recipients: Array.from(recipients), subject, message });
    updateState({ type: ActionEnum.RESET });
  };

  return {
    recipients,
    subject,
    message,
    handleRecipientsChange,
    handleSubjectChange,
    handleMessageChange,
    handleSendEmail,
    closeEmailDialog,
  };
};
