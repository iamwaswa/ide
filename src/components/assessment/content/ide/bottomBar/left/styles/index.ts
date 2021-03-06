import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: `flex`,
    [`& button + button`]: {
      marginInlineStart: `${theme.spacing()}px`,
    },
  },
}));
