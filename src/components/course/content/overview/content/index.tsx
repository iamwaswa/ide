import { Box } from '@material-ui/core';
import { CourseOverview } from '@types';
import { EmailClient } from './email';
import { LeftContent } from './left';
import React from 'react';
import { RightContent } from './right';
import { useStyles } from './styles';

interface IProps {
  subTitle: string;
  overview: CourseOverview;
}

export const Content: React.FC<IProps> = ({ subTitle, overview }) => {
  const [openEmailClient, setOpenEmailClient] = React.useState<boolean>(false);
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <LeftContent
          containerClassName={classes.child}
          overview={overview}
          subTitle={subTitle}
          setOpenEmailClient={setOpenEmailClient}
        />
        <RightContent containerClassName={classes.child} overview={overview} />
      </Box>
      <EmailClient
        openEmailClient={openEmailClient}
        setOpenEmailClient={setOpenEmailClient}
        instructor={overview.instructor}
        teachingAssistants={overview.teachingAssistants}
      />
    </>
  );
};
