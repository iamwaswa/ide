import { Theme, makeStyles } from '@material-ui/core/styles';

import { AsideViewEnum } from '@enums';

interface IStylesProps {
  view: AsideViewEnum;
}

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    flexGrow: 1,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `stretch`,
    justifyContent: `stretch`,
    height: `100%`,
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
