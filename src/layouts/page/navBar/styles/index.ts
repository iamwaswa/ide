import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  nav: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    display: `flex`,
    flexDirection: `column`,
    minWidth: 320,
    padding: theme.spacing(2),
    [theme.breakpoints.up(`sm`)]: {
      flexDirection: `row`,
      alignItems: `center`,
      justifyContent: `space-between`,
    },
  },
}));
