import { makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  deletingTestCase: boolean;
}

export const useStyles = makeStyles((theme) => ({
  dialogActions: {
    marginBlockEnd: `${theme.spacing(0.75)}px`,
  },
  primaryButtonContainer: {
    marginInlineEnd: `${theme.spacing()}px`,
    position: `relative`,
  },
  progress: {
    position: `absolute`,
    zIndex: ({ deletingTestCase }: IStylesProps): number =>
      deletingTestCase ? 1 : 0,
    left: 61,
    top: 4,
  },
}));
