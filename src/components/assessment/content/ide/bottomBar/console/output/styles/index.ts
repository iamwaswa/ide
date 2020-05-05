import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  color: {
    color: theme.palette.grey[700],
  },
}));
