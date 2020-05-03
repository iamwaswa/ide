import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    borderRadius: `5`,
    borderColor: theme.palette.grey[500],
    display: `table-row`,
    component: `tr`,
    marginTop: `0.5`,
  },
  td: {
    padding: theme.spacing(),
    fontSize: theme.typography.body1.fontSize,
  },
  strong: {
    display: `block`,
    marginBlockEnd: theme.spacing(0.25),
  },
}));
