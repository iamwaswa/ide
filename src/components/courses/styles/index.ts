import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: theme.spacing(0, `auto`),
    maxWidth: theme.breakpoints.values.md,
    padding: theme.spacing(8, 0),
    [`& .content`]: {
      margin: theme.spacing(0, `auto`),
      width: `80%`,
    },
  },
}));
