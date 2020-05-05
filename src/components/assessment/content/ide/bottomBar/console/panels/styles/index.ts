import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  expandConsole: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    display: `flex`,
    flexGrow: ({ expandConsole }: IStylesProps): number =>
      expandConsole ? 1 : 0,
    height: ({ expandConsole }: IStylesProps): string =>
      expandConsole ? `299px` : `149px`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `stretch`,
    padding: theme.spacing(),
  },
  rootDefault: {
    display: `none`,
    flexGrow: 1,
    flexDirection: `column`,
    justifyContent: `stretch`,
    alignItems: `stretch`,
    height: `100%`,
  },
}));
