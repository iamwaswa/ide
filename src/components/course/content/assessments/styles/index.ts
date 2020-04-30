import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  table: {
    flexGrow: 1,
    maxWidth: theme.breakpoints.values.md,
  },
}));
