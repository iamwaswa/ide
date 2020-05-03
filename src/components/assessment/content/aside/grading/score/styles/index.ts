import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  variants: {
    display: `flex`,
    justifyContent: `space-evenly`,
    marginBlockEnd: `${theme.spacing()}px`,
  },
}));
