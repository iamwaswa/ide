import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: `flex`,
    alignItems: `flex-end`,
    marginBlockStart: `${theme.spacing()}px`,
  },
  backMargin: {
    marginInlineStart: `${theme.spacing()}px`,
  },
}));
