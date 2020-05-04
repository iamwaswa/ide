import { EditorThemeEnum } from '@enums';
import { getEditorBackgroundColor } from '@theme';
import { makeStyles } from '@material-ui/core/styles';

interface IStylesProps {
  editorTheme: EditorThemeEnum;
}

export const useStyles = makeStyles((theme) => ({
  container: {
    height: `100%`,
    overflow: `hidden`,
  },
  editorContainer: {
    position: `relative`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `stretch`,
    height: `100%`,
    overflow: `scroll`,
    backgroundColor: ({ editorTheme }: IStylesProps): string =>
      getEditorBackgroundColor(editorTheme),
    [`&:before`]: {
      content: `""`,
      position: `absolute`,
      zIndex: -1,
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    [`& > section`]: { flexGrow: 1 },
    [`& .margin`]: { paddingBlockStart: `${theme.spacing(1.1875)}px` },
    [`& .overflow-guard`]: { paddingBlockStart: `${theme.spacing(1.1875)}px` },
  },
}));
