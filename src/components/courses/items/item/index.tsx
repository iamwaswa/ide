import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import React from 'react';
import { navigate } from 'gatsby';
import { useAuth } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  courseId: string;
  title: string;
  subTitle: string;
  image?: string;
}

export const Item: React.FC<IProps> = ({
  courseId,
  title,
  subTitle,
  image,
}) => {
  const { uid } = useAuth();
  const classes = useStyles();

  const goToCoursePage = (): void => {
    navigate(`/session/${uid}/courses/${courseId}`, {
      state: { courseId },
    });
    return;
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
