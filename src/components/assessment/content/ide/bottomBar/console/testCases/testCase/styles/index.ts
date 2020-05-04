import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const sharedStyles = (backgroundColor: string) => ({
    backgroundColor,
    color: theme.palette.getContrastText(backgroundColor),
    display: `flex`,
    flexGrow: 1,
    justifyContent: `flex-start`,
    padding: theme.spacing(),
  });

  return createStyles({
    testCaseContainer: {
      display: `flex`,
      maxWidth: `500px`,
    },
    testCase: {
      display: `flex`,
      flexGrow: 1,
      overflow: `scroll`,
    },
    input: {
      flexDirection: `column`,
      ...sharedStyles(theme.palette.grey[300]),
    },
    output: {
      flexDirection: `column`,
      ...sharedStyles(theme.palette.grey[200]),
    },
    deleteIcon: {
      marginInlineStart: `${theme.spacing()}px`,
    },
    inputs: {
      marginInlineEnd: `${theme.spacing()}px`,
    },
  });
});
