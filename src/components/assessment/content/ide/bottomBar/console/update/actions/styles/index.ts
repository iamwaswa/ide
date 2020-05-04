import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  updating: boolean;
  testCaseNumber?: number;
}

export const useStyles = makeStyles((theme: Theme) => ({
  dialogActions: {
    marginBlockEnd: `${theme.spacing(0.5)}px`,
  },
  primaryButtonContainer: {
    marginInlineEnd: `${theme.spacing()}px`,
    position: `relative`,
  },
  progress: {
    position: `absolute`,
    zIndex: ({ updating }: IStylesProps): number => (updating ? 1 : 0),
    left: ({ testCaseNumber }: IStylesProps): number =>
      testCaseNumber ? 17 : 19,
    top: 4,
  },
}));
