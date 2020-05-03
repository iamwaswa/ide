import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(0, `auto`),
    padding: theme.spacing(4),
    minWidth: 250,
    maxWidth: theme.breakpoints.values.sm,
  },
  cardContent: {
    padding: 0,
  },
  cardActions: {
    display: `flex`,
    justifyContent: `flex-end`,
    [`& button`]: {
      margin: theme.spacing(0, 0.5, 0.5, 0),
    },
  },
}));
