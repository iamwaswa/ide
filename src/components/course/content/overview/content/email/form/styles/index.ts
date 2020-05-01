import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  dialogTitleRoot: {
    paddingBlockEnd: 0,
  },
  dialogContentRoot: {
    [`&:first-child`]: {
      paddingBlockStart: 0,
    },
  },
});
