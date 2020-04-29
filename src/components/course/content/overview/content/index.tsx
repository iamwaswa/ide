import { Box, Typography } from '@material-ui/core';
import { CourseOverview, User } from '@types';

import { Contact } from './contact';
import { ContentComponent } from './component';
import { EmailClient } from './email';
import React from 'react';
import { ToggleEmail } from './email/toggle';
import { useStyles } from './styles';

interface IProps {
  subTitle: string;
  overview: CourseOverview;
}

export const Content: React.FC<IProps> = ({
  subTitle,
  overview: { courseDetails, instructor, syllabus, teachingAssistants },
}) => {
  const [openEmailClient, setOpenEmailClient] = React.useState<boolean>(false);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h4" gutterBottom={true}>
          {subTitle}
        </Typography>
        <ContentComponent title="Instructor">
          <Contact contact={instructor} />
        </ContentComponent>
        <ContentComponent
          extraContentClassName={classes.teachingAssistants}
          title="Teaching assistants"
        >
          {teachingAssistants.map(
            ({ email, displayName, id }: User): JSX.Element => (
              <Contact key={id} contact={{ id, email, displayName }} />
            )
          )}
        </ContentComponent>
        <ToggleEmail setOpenEmailClient={setOpenEmailClient} />
        <ContentComponent title="Syllabus">{syllabus}</ContentComponent>
        <ContentComponent title="Course details">
          {courseDetails}
        </ContentComponent>
      </Box>
      <EmailClient
        openEmailClient={openEmailClient}
        setOpenEmailClient={setOpenEmailClient}
        instructor={instructor}
        teachingAssistants={teachingAssistants}
      />
    </>
  );
};
