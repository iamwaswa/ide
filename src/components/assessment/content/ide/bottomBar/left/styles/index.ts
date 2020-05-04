import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: `flex`,
  },
  downloadFile: {
    marginInlineStart: `${theme.spacing(0.5)}px`,
  },
}));
