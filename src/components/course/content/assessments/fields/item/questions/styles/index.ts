import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  questionsContainer: {
    display: `flex`,
    flexWrap: `wrap`,
    padding: theme.spacing(4, 0),
  },
  question: {
    margin: theme.spacing(0, 2, 2, 0),
  },
  addQuestion: {
    alignSelf: `flex-start`,
  },
  addQuestionShifted: {
    margin: theme.spacing(2, 0, 0, 2),
  },
}));
