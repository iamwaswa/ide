import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  disabled: {
    textDecoration: `none`,
    color: theme.palette.text.disabled,
    cursor: `default`,
    [`&:hover, &:focus`]: {
      textDecoration: `none`,
    },
  },
}));
