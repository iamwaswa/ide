import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  disabled: {
    textDecoration: `none`,
    color: theme.palette.text.disabled,
    cursor: `default`,
    [`&:hover, &:focus`]: {
      textDecoration: `none`,
    },
  },
}));
