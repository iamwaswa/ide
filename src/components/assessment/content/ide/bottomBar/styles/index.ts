import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: `relative`,
  },
  bottomBarLeft: {
    paddingTop: theme.spacing(),
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
  },
}));
