import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    minHeight: `100%`,
    padding: theme.spacing(2),
  },
}));
