import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  timeContainer: {
    display: `flex`,
    flexWrap: `wrap`,
    padding: theme.spacing(4, 0, 0, 0),
    [`& > *`]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));
