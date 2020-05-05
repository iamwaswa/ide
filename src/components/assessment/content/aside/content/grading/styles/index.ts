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
      // view === AsideViewEnum.GRADING ? 1 : 0,
      1,
    marginBlockStart: 0,
    minWidth: 300,
  },
  tabRoot: {
    minWidth: `inherit`,
  },
  content: {
    marginBlockStart: `${theme.spacing(3)}px`,
  },
  constrainWidth: {
    width: `85%`,
  },
}));
