import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    minWidth: 320,
    position: `relative`,
    top: 0,
    left: 0,
    right: 0,
  },
  toolBar: {
    padding: theme.spacing(1.5, 3),
  },
  main: {
    flexGrow: 1,
    minWidth: 320,
  },
}));
