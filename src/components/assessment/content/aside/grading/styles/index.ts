import { Theme, makeStyles } from '@material-ui/core/styles';

import { AsideViewEnum } from '@enums';

interface IStylesProps {
  view: AsideViewEnum;
}

export const useStyles = makeStyles((theme: Theme) => ({
  gradingContainer: {
    display: ({ view }: IStylesProps): string =>
      view === AsideViewEnum.QUESTIONS ? `none` : `block`,
    flexGrow: ({ view }: IStylesProps): number =>
      view === AsideViewEnum.GRADING ? 1 : 0,
    marginBlockStart: ({ view }: IStylesProps): number | string =>
      view === AsideViewEnum.GRADING ? 0 : `${theme.spacing()}px`,
  },
  tabRoot: {
    minWidth: `inherit`,
  },
  content: {
    padding: theme.spacing(),
  },
}));
