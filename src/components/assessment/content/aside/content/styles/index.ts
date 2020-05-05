import { Theme, makeStyles } from '@material-ui/core/styles';

import { AsideViewEnum } from '@enums';

interface IStylesProps {
  view: AsideViewEnum;
}

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    display: `flex`,
    flexDirection: `column`,
    [`& > div:first-of-type`]: {
      margin: theme.spacing(2, 0, 0, 2),
    },
    width: 300,
  },
  container: {
    display: `flex`,
    flex: `0 1 300px`,
    flexDirection: `column`,
    alignItems: `stretch`,
    justifyContent: `stretch`,
    height: `100%`,
    minWidth: 300,
    padding: theme.spacing(2),
  },
  buttonGroup: {
    flexGrow: 0,
    marginBlockEnd: `${theme.spacing()}px`,
  },
  asideElement: {
    display: `flex`,
    flexDirection: `column`,
    maxWidth: 300,
    flexBasis: ({ view }: IStylesProps): string =>
      view === AsideViewEnum.SPLIT ? `auto` : `50%`,
    marginInlineEnd: `${theme.spacing(4)}px`,
  },
}));
