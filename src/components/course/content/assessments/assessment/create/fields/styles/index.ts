import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  input: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'stretch',
  },
  questionsMargin: {
    margin: theme.spacing(0.5, 0.75, 0.75, 0),
  },
  addMargin: {
    margin: theme.spacing(0, 0.75, 0.75, 0),
  },
}));
