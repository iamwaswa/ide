import { Theme, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  borderRadius: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: ({ borderRadius }: IStylesProps): string => borderRadius,
    flexGrow: 1,
    height: `100%`,
    padding: theme.spacing(2, 2, 0, 0),
  },
}));
