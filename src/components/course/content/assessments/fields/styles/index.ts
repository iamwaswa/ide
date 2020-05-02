import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  fieldsContainer: {
    display: `flex`,
    flexWrap: `wrap`,
    margin: theme.spacing(0, 0, 0, 2),
  },
  fieldsContainerColumn: {
    flexDirection: `column`,
  },
  left: {
    flex: `0 1 40%`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `flex-start`,
  },
  leftGrow: {
    flexGrow: 1,
  },
}));
