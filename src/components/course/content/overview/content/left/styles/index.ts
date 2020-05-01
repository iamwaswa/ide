import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  teachingAssistants: {
    display: `flex`,
    flexWrap: `wrap`,
    [`& p`]: {
      marginInlineEnd: `${theme.spacing(2)}px`,
    },
  },
  alignRight: {
    textAlign: `right`,
  },
}));
