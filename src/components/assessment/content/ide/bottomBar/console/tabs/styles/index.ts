import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 0,
    display: `flex`,
    justifyContent: `space-between`,
    paddingRight: theme.spacing(0.125),
    backgroundColor: theme.palette.grey[300],
    color: theme.palette.grey[900],
  },
  icon: {
    color: theme.palette.grey[600],
  },
}));
