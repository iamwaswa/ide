import { makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  borderRadius: string;
}

export const useStyles = makeStyles({
  root: {
    flexBasis: `75vw`,
    flexGrow: 1,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `stretch`,
    alignItems: `stretch`,
    minWidth: 850,
  },
  codeEditor: {
    flexGrow: 1,
    flexBasis: 500,
    minWidth: 500,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `stretch`,
    alignItems: `stretch`,
    backgroundColor: `transparent`,
    borderRadius: ({ borderRadius }: IStylesProps): string => borderRadius,
    overflow: `hidden`,
  },
});
