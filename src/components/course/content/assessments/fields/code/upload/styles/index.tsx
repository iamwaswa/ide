import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  file: {
    display: 'none',
  },
  uploadButton: {
    [`& > svg`]: {
      margin: theme.spacing(0, 0.5, 0, -1),
    },
  },
  buttonLabel: {
    textTransform: `initial`,
  },
}));
