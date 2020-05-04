import { makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  student: boolean;
  submitting: boolean;
}

export const useStyles = makeStyles(() => ({
  root: {
    position: `relative`,
  },
  progress: {
    position: `absolute`,
    zIndex: ({ submitting }: IStylesProps): number => (submitting ? 1 : 0),
    left: ({ student }: IStylesProps): string => (student ? `33px` : `60px`),
    top: `5px`,
  },
}));
