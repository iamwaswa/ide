import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  borderRadius: string;
}

export const useStyles = makeStyles((theme: Theme) => {
  const sharedStyles = {
    borderRadius: ({ borderRadius }: IStylesProps): string => borderRadius,
    height: `100% !important`,
    width: `100% !important`,
  };

  return createStyles({
    container: {
      ...sharedStyles,
      overflow: `hidden`,
    },
    editorContainer: {
      ...sharedStyles,
      position: `relative`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `stretch`,
      overflow: `scroll`,
      [`& > div.react-monaco-editor-container`]: {
        ...sharedStyles,
        [`& > div.monaco-editor`]: {
          ...sharedStyles,
          [`& div.overflow-guard`]: {
            ...sharedStyles,
            paddingBlockStart: `${theme.spacing(2.5)}px`,
            [`& div.margin`]: {
              paddingBlockStart: `${theme.spacing(2.5)}px`,
            },
          },
        },
      },
    },
  });
});
