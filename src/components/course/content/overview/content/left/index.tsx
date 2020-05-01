import { Box, Typography } from '@material-ui/core';
import { Callback, CourseOverview, User } from '@types';

import { Contact } from '../contact';
import { ContentComponent } from '../component';
import React from 'react';
import { ToggleEmail } from '../email/toggle';
import { useStyles } from './styles';

interface IProps {
  containerClassName: string;
  subTitle: string;
  overview: CourseOverview;
  setOpenEmailClient: Callback<boolean, void>;
}

export const LeftContent: React.FC<IProps> = ({
  containerClassName,
  subTitle,
  overview: { instructor, teachingAssistants },
  setOpenEmailClient,
}) => {
  const classes = useStyles();

  return (
    <Box className={containerClassName}>
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
    </Box>
  );
};
