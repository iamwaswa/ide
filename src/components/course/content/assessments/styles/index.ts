import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    margin: theme.spacing(0, `auto`),
    maxWidth: theme.breakpoints.values.md,
  },
}));
