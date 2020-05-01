import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => {
  const radius = 4;

  const sharedStyles = {
    background: theme.palette.background.paper,
  };

  return createStyles({
    container: {
      [theme.breakpoints.up(`sm`)]: {
        maxWidth: theme.breakpoints.values.sm,
      },
    },
    label: {
      [`& .ql-editor`]: {
        color: theme.palette.text.primary,
        minHeight: 200,
      },
      [`& .ql-container`]: {
        ...sharedStyles,
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
      },
      [`& .ql-snow.ql-toolbar`]: {
        ...sharedStyles,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
      },
      [`& .ql-picker-label`]: {
        color: theme.palette.text.primary,
      },
      [`& .ql-snow .ql-stroke`]: {
        stroke: theme.palette.text.primary,
      },
      [`& .ql-snow .ql-fill`]: {
        fill: theme.palette.text.primary,
      },
    },
    top: {
      alignItems: `flex-start`,
      margin: theme.spacing(0, 0, 0, 1),
    },
    labelContent: {
      display: `flex`,
      alignItems: `center`,
      margin: theme.spacing(0, 0, 2, 0),
    },
  });
});
