import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: `flex`,
    flexWrap: `wrap`,
    [`& > *`]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));
