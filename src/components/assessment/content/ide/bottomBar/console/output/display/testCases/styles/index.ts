import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    color: theme.palette.grey[700],
    marginBlockEnd: `${theme.spacing()}px`,
  },
  testCaseTitle: {
    margin: theme.spacing(0.5, 0, 0.5, 1),
  },
  grid: {
    display: `grid`,
    gridTemplateColumns: `auto`,
    gridTemplateRows: `repeat(2, auto)`,
    gridRowGap: theme.spacing(0.5),
    margin: theme.spacing(0, 0, 1, 1),
    [`& > p:nth-of-type(2)`]: {
      marginInlineStart: `${theme.spacing()}px`,
    },
  },
  meta: {
    margin: theme.spacing(1, 0, 0, 1),
  },
  cpuTime: {
    margin: theme.spacing(0, 0, 0.5, 0),
  },
}));
