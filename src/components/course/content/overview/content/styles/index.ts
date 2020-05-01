import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: `grid`,
    gridTemplateColumns: `1fr`,
    margin: theme.spacing(0, `auto`),
    maxWidth: theme.breakpoints.values.md,
    [theme.breakpoints.up(`md`)]: {
      gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
    },
  },
  child: {
    margin: theme.spacing(0, 0, 2, 0),
    minWidth: 300,
    width: `70%`,
    [theme.breakpoints.up(`md`)]: {
      width: `100%`,
    },
  },
}));
