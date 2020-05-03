import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    fontWeight: 'bold',
  },
  content: {
    margin: theme.spacing(0, 1, 2, 1.5),
    width: `100%`,
    [theme.breakpoints.up(`sm`)]: {
      maxWidth: theme.breakpoints.values.sm,
      width: `80%`,
    },
    [theme.breakpoints.up(`md`)]: {
      width: `70%`,
    },
  },
}));
