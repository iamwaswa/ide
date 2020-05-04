import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  numTestCases: number;
}

export const useStyles = makeStyles((theme: Theme) => ({
  testCasesContainer: {
    display: `grid`,
    gridTemplateRows: `auto`,
    gridTemplateColumns: `repeat(auto-fill, minmax(250px, 1fr))`,
    gridGap: theme.spacing(2),
    overflow: `scroll`,
  },
  title: {
    margin: theme.spacing(0, 0, 1, 0),
  },
  addMargin: {
    marginBlockStart: ({ numTestCases }: IStylesProps) =>
      numTestCases > 0 ? `${theme.spacing()}px` : 0,
  },
}));
