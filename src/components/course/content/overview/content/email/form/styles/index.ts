import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  dialogTitleRoot: {
    paddingBlockEnd: 0,
  },
  dialogContentRoot: {
    maxWidth: 487,
    [`&:first-child`]: {
      paddingBlockStart: 0,
    },
  },
});
