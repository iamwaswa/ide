import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    justifyContent: `stretch`,
    height: `100%`,
  },
  buttonGroup: {
    flexGrow: 0,
    marginBlockEnd: `${theme.spacing()}px`,
  },
  asideElement: {
    maxWidth: 300,
    flexBasis: `50%`,
    marginInlineEnd: `${theme.spacing(4)}px`,
  },
}));
