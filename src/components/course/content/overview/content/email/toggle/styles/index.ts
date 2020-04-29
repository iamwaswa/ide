import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  toggleEmail: {
    margin: theme.spacing(1, 0, 3, 0),
  },
  toggleEmailIcon: {
    marginInlineEnd: `${theme.spacing()}px`,
  },
}));
