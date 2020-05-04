import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  dialogContent: {
    display: `grid`,
    gridTemplateRows: `auto`,
    gridTemplateColumns: `repeat(2, auto)`,
    gridColumnGap: theme.spacing(2),
  },
  inputsContainer: {
    display: `flex`,
    flexDirection: `column`,
  },
}));
