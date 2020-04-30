import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  timeContainer: {
    display: `flex`,
    flexWrap: `wrap`,
    padding: theme.spacing(4, 0),
    [`& > *`]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));
