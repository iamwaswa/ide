import {
  Box,
  Button,
  Fade,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import { useQuizContext } from '@context/quiz/hooks';
import { useStyles } from './styles';

interface IProps {
  hideQuizPrompt: () => void;
}

export const QuizPrompt: React.FC<IProps> = ({ hideQuizPrompt }) => {
  const classes = useStyles();
  const { setStart } = useQuizContext();

  const startQuiz = () => {
    hideQuizPrompt();
    setStart(true);
  };

  return (
    <Fade in={true} timeout={500} mountOnEnter unmountOnExit>
      <Box className={classes.root}>
        <Card className={classes.card} variant="outlined">
          <CardContent className={classes.cardContent}>
            <List>
              <ListItem>
                <ListItemText>
                  Before starting the quiz remember the following:
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Time will start running once you click on{' '}
                  <strong>START QUIZ</strong>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>You cannot restart the timer.</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Your file will be submitted once time runs out.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  You can submit before time runs out, however, you will not be
                  able to resubmit.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Read the questions carefully.</ListItemText>
              </ListItem>
            </List>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              onClick={startQuiz}
            >
              Start Quiz
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Fade>
  );
};
