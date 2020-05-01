import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  fieldsContainer: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
    margin: theme.spacing(0, 0, 0, 2),
  },
}));
