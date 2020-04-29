import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(0, `auto`, 1, 0),
    maxWidth: theme.breakpoints.values.lg,
  },
  teachingAssistants: {
    display: `flex`,
    flexWrap: `wrap`,
    [`& p`]: {
      marginInlineEnd: `${theme.spacing(2)}px`,
    },
  },
}));
