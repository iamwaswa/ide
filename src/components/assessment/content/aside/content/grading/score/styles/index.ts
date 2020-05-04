import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  total: {
    marginBlockEnd: `${theme.spacing(2)}px`,
  },
}));
