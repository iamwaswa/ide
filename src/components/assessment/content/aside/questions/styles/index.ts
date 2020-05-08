import { Theme, makeStyles } from '@material-ui/core/styles';

import { AsideViewEnum } from '@enums';

interface IStylesProps {
  view: AsideViewEnum;
}

export const useStyles = makeStyles((theme: Theme) => ({
  questionsContainer: {
    display: ({ view }: IStylesProps): string =>
      view === AsideViewEnum.GRADING ? `none` : `block`,
    flexGrow: 1,
  },
  question: {
    margin: 0,
    marginBlockStart: `${theme.spacing(0.5)}px`,
    maxHeight: `78vh`,
    overflow: `scroll`,
    wordBreak: `break-word`,
  },
  labelRoot: {
    margin: 0,
    [`& .quill`]: {
      marginInlineStart: `${theme.spacing(-2)}px`,
    },
  },
  labelPlacementTop: {
    alignItems: `flex-start`,
  },
  extraMargin: {
    marginBlockEnd: `${theme.spacing(2)}px`,
  },
}));
