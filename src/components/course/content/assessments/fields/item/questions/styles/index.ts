import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  questionsContainer: {
    display: `flex`,
    flexDirection: `column`,
    padding: theme.spacing(1, 0),
  },
  question: {
    margin: theme.spacing(0, 2, 2, 0),
  },
  addQuestion: {
    alignSelf: `flex-start`,
  },
  addQuestionShift: {
    margin: theme.spacing(1, 0, 0, 1),
  },
}));
