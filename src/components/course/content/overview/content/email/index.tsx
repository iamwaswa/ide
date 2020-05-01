import { Callback, User } from '@types';

import { EmailForm } from './form';
import React from 'react';

interface IProps {
  instructor: User;
  teachingAssistants: Array<User>;
  openEmailClient: boolean;
  setOpenEmailClient: Callback<boolean, void>;
}

export const EmailClient: React.FC<IProps> = ({
  openEmailClient,
  setOpenEmailClient,
  instructor,
  teachingAssistants,
}) => {
  const sendEmailAsync = async () => {
    // TODO: Send email
    /*await sendEmail({
      variables: {
        sendEmailInput: {
          senderId: userId,
          senderName: displayName,
          senderEmail: email,
          recipients: emailRecipients,
          subject: emailSubject,
          message: emailMessage,
        },
      },
    });*/
    setTimeout(() => {
      setOpenEmailClient(false);
    }, 1000);
  };

  return (
    <EmailForm
      openEmailClient={openEmailClient}
      setOpenEmailClient={setOpenEmailClient}
      sendEmailAsync={sendEmailAsync}
      possibleRecipients={[instructor, ...teachingAssistants]}
    />
  );
};
