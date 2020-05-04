import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  runningCode: boolean;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginInlineEnd: `${theme.spacing()}px`,
    position: `relative`,
  },
  progress: {
    position: `absolute`,
    zIndex: ({ runningCode }: IStylesProps): number => (runningCode ? 1 : 0),
    left: 61,
    top: 4,
  },
}));
