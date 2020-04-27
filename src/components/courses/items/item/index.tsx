import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import React from 'react';
import { navigate } from 'gatsby';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  id: string;
  title: string;
  subTitle: string;
  image?: string;
}

export const Item: React.FC<IProps> = ({ id, title, subTitle, image }) => {
  const {
    uid,
    courseId,
    courseTitle,
    setCourseId,
    setCourseTitle,
  } = useAuthContext();
  const classes = useStyles();

  React.useEffect((): void => {
    if (uid && courseId && courseTitle) {
      navigate(`/session/${uid}/courses/${courseId}`);
      return;
    }
  }, [uid, courseId, courseTitle]);

  const goToCoursePage = (): void => {
    setCourseId(id);
    setCourseTitle(title);
  };

  return (
    <Card>
      <CardActionArea onClick={goToCoursePage}>
        <CardMedia
          className={classes.cardMedia}
          image={`/images/${image}`}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {subTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
