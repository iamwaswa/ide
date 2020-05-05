import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: `flex`,
    margin: theme.spacing(0, `auto`),
    height: 598,
    maxWidth: 1096,
  },
}));
