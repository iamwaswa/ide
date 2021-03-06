import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  codeContainer: {
    display: `flex`,
    flexDirection: `column`,
  },
  uploadContainer: {
    margin: theme.spacing(2, 0, 0, 0),
    [`& > *`]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));
