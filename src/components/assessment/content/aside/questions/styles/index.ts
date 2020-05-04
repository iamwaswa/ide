import { Theme, makeStyles } from '@material-ui/core/styles';

import { AsideViewEnum } from '@enums';

interface IStylesProps {
  view: AsideViewEnum;
  student: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  questionsContainer: {
    display: ({ view }: IStylesProps): string =>
      view === AsideViewEnum.GRADING ? `none` : `block`,
    flexGrow: ({ student, view }: IStylesProps) =>
      student || view === AsideViewEnum.QUESTIONS ? 1 : 0,
    padding: theme.spacing(2),
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
}));
