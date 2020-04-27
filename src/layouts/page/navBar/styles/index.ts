import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const sharedStyles = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.primary.main),
    display: `flex`,
    justifyContent: `space-between`,
    width: `100%`,
  };

  const rowStyles: { flexDirection: `row`; alignItems: `center` } = {
    flexDirection: `row`,
    alignItems: `center`,
  };

  return createStyles({
    nav: {
      ...sharedStyles,
      flexDirection: `column`,
      [theme.breakpoints.up(`sm`)]: {
        ...rowStyles,
      },
    },
    fixedNav: {
      ...sharedStyles,
      ...rowStyles,
    },
  });
});
