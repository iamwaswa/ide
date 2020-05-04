import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  borderRadius: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    height: `100%`,
    padding: theme.spacing(),
    overflow: `scroll`,
    backgroundColor: theme.palette.grey[100],
    borderBottomLeftRadius: ({ borderRadius }: IStylesProps): string =>
      borderRadius,
    borderBottomRightRadius: ({ borderRadius }: IStylesProps): string =>
      borderRadius,
  },
}));
