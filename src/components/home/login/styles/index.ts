import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  signInContainer: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    [`& .button-container + .button-container`]: {
      marginBlockStart: `${theme.spacing(2)}px`,
    },
  },
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
