import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  fieldsContainer: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    padding: theme.spacing(2, 0),
  },
}));
