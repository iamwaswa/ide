import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tr: {
    borderRadius: `5`,
    borderColor: theme.palette.grey[500],
    display: `table-row`,
    component: `tr`,
    marginTop: `0.5`,
  },
  td: {
    paddingBlockStart: `${theme.spacing()}px`,
    fontSize: theme.typography.body1.fontSize,
  },
}));
