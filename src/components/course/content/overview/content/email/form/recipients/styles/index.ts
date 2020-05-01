import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  recipientsContainer: {
    padding: theme.spacing(2, 0, 2, 1),
    overflow: `scroll`,
    [`& div + div`]: {
      margin: theme.spacing(0, 0, 0, 1),
    },
  },
}));
