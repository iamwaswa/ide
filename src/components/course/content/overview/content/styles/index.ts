import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginBlockEnd: `${theme.spacing()}px`,
  },
  heading: {
    fontWeight: 'bold',
  },
  content: {
    margin: theme.spacing(1, 1, 1, 1.5),
  },
  teachingAssistants: {
    display: `flex`,
    flexWrap: `wrap`,
  },
}));
