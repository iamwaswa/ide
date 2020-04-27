import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  home: {
    height: `100%`,
    padding: theme.spacing(4),
  },
  container: {
    display: `flex`,
    flexWrap: `wrap`,
    margin: theme.spacing(0, `auto`, 3, `auto`),
    maxWidth: theme.breakpoints.values.md,
    [`& .text-content`]: {
      width: `100%`,
      [theme.breakpoints.up(`sm`)]: {
        width: `50%`,
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
    [`& .action-content`]: {
      flexGrow: 1,
      display: `flex`,
      flexDirection: `column`,
      flexWrap: `wrap`,
      alignItems: `flex-start`,
      justifyContent: `flex-start`,
      marginBlockStart: `${theme.spacing(2)}px`,
      [`& .button-container + .button-container`]: {
        margin: theme.spacing(2, 0, 0, 0),
      },
      [theme.breakpoints.up(`sm`)]: {
        alignItems: `center`,
        justifyContent: `center`,
        marginBlockStart: 0,
      },
    },
  },
}));
