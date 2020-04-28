import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    backgroundColor: theme.palette.secondary.main,
    position: `static`,
  },
  iconDefault: {
    color: theme.palette.text.secondary,
  },
  icon: {
    color: theme.palette.grey[50],
  },
  listItem: {
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.secondary.main,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  listItemDefault: {
    color: theme.palette.text.secondary,
    backgroundColor: `initial`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  listItemIcon: {
    justifyContent: `center`,
  },
}));
