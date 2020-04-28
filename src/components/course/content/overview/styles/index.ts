import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: `flex`,
    justifyContent: `space-between`,
    flexWrap: `wrap`,
  },
  sendEmail: {
    marginBlockEnd: `${theme.spacing()}px`,
  },
  dialogMargin: {
    margin: theme.spacing(1.5),
    marginBottom: '20px',
  },
}));
