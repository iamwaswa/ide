import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  codeContainer: {
    display: `flex`,
    flexWrap: `wrap`,
    alignItems: `flex-end`,
    [`& > *`]: {
      margin: theme.spacing(0, 2, 2, 0),
    },
  },
}));
