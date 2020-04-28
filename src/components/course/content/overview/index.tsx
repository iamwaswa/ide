import { Box, Button, Fade, Typography } from '@material-ui/core';

import { Content } from './content';
import { CourseOverview } from '@types';
import { EmailClient } from './email';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  overview: CourseOverview;
  title: string;
}

export const Overview: React.FC<IProps> = ({ overview, title }) => {
  const [openEmailClient, setOpenEmailClient] = React.useState<boolean>(false);
  const classes = useStyles();

  const handleOpenEmailDialog = (): void => setOpenEmailClient(true);

  return (
    <Fade in={true} timeout={600} mountOnEnter unmountOnExit>
      <Box>
        <Box className={classes.root}>
          <Typography component="p" variant="h5" gutterBottom>
            {title}
          </Typography>
          <Button
            className={classes.sendEmail}
            onClick={handleOpenEmailDialog}
            color="primary"
            variant="contained"
          >
            Send Email
          </Button>
        </Box>
        <Content overview={overview} />
        <EmailClient
          openEmailClient={openEmailClient}
          setOpenEmailClient={setOpenEmailClient}
          overview={overview}
        />
      </Box>
    </Fade>
  );
};
