import { makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  borderRadius: string;
  expandConsole: boolean;
}

export const useStyles = makeStyles({
  wrapper: {
    height: `100%`,
  },
  collapse: {
    position: `absolute`,
    bottom: 41,
    left: 0,
    right: 0,
    height: ({ expandConsole }: IStylesProps): string =>
      expandConsole ? `350px` : `200px`,
    maxHeight: ({ expandConsole }: IStylesProps): string =>
      expandConsole ? `350px` : `200px`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `stretch`,
    borderBottomLeftRadius: ({ borderRadius }: IStylesProps): string =>
      borderRadius,
    borderBottomRightRadius: ({ borderRadius }: IStylesProps): string =>
      borderRadius,
    overflow: `scroll`,
    zIndex: 3,
  },
  progress: { position: `absolute`, left: 0, right: 0 },
});
