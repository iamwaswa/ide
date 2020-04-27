import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  buttonContainer: {
    position: `relative`,
  },
  spinner: {
    position: `absolute`,
    top: 7,
    left: `38%`,
    zIndex: theme.zIndex.tooltip,
  },
}));
