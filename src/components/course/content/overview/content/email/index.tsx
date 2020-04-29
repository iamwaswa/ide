import { Callback, EmailData, User } from '@types';

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
  const sendEmailAsync = async (emailData: EmailData) => {
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
      console.log(emailData);
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
