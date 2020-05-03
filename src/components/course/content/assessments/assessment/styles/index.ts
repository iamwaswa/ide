import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  buttons: {
    textAlign: 'left',
    padding: theme.spacing(),
  },
}));
