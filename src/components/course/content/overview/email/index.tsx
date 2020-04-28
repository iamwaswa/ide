import { Callback, CourseOverview, EmailData } from '@types';

import { EmailForm } from './form';
import React from 'react';

interface IProps {
  overview: CourseOverview;
  openEmailClient: boolean;
  setOpenEmailClient: Callback<boolean, void>;
}

export const EmailClient: React.FC<IProps> = ({
  overview,
  openEmailClient,
  setOpenEmailClient,
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
      possibleRecipients={[
        {
          ...overview.instructor,
        },
        ...overview.teachingAssistants,
      ]}
    />
  );
};
