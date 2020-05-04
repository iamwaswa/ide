import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  disabled: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  testCaseHeader: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: ({ disabled }: IStylesProps) =>
      theme.spacing(
        1.25,
        disabled ? 1.1875 : 0.25,
        1,
        disabled ? 1.1875 : 0.25
      ),
  },
  icons: {
    display: `flex`,
    flexDirection: `column`,
    marginBlockStart: `${theme.spacing()}px`,
  },
}));
