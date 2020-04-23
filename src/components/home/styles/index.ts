import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  home: {
    height: `100%`,
    minWidth: 320,
    padding: theme.spacing(4),
  },
  container: {
    margin: theme.spacing(0, `auto`, 3, `auto`),
    maxWidth: theme.breakpoints.values.md,
    [`& .content`]: {
      width: `80%`,
      [theme.breakpoints.up(`sm`)]: {
        width: `60%`,
      },
      [`& .content__mainTitle`]: {
        marginBlockEnd: `${theme.spacing(2)}px`,
      },
      [`& .content__subTitle`]: {
        marginBlockEnd: `${theme.spacing(1.5)}px`,
      },
      [`& .content__text`]: {
        marginBlockEnd: `${theme.spacing()}px`,
      },
    },
  },
  signInContainer: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    [`& button + button`]: {
      marginBlockStart: `${theme.spacing(2)}px`,
    },
  },
  secondaryContent: {
    display: `flex`,
    flexWrap: `wrap`,
    [`& .secondaryContent__container`]: {
      flexBasis: 280,
      margin: theme.spacing(2),
      [`& .secondaryContent__mainTitle`]: {
        marginBlockEnd: `${theme.spacing(1.5)}px`,
      },
    },
  },
}));
