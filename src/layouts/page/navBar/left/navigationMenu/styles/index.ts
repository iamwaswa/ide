import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  link: {
    textDecoration: `none`,
    color: theme.palette.text.primary,
  },
}));
