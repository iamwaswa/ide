import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: theme.spacing(2),
  },
}));
