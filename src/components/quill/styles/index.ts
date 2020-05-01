import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.up(`sm`)]: {
      maxWidth: theme.breakpoints.values.sm,
    },
  },
}));
