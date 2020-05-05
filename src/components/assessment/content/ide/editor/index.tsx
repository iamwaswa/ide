import { Callback, Editor } from '@types';

import { Box } from '@material-ui/core';
import { EditorThemeEnum } from '@enums';
import MonacoEditor from 'react-monaco-editor';
import React from 'react';
import { useIDEStylesContext } from '../context/hooks';
import { useStyles } from './styles';

interface IProps {
  editorTheme: EditorThemeEnum;
  editorLanguage: string;
  setEditor: Callback<Editor, void>;
}

export const CodeEditor: React.FC<IProps> = ({
  setEditor,
  editorLanguage,
  editorTheme,
}) => {
  const borderRadius = useIDEStylesContext();
  const classes = useStyles({
    borderRadius,
  });
  const containerRef = React.useRef<HTMLElement>(null);

  const handleEditorDidMount = (editor: Editor): void => setEditor(editor);

  return (
    <Box className={classes.container}>
      <section className={classes.editorContainer} ref={containerRef}>
        <MonacoEditor
          height="100%"
          width="100%"
          language={editorLanguage}
          theme={editorTheme}
          editorDidMount={handleEditorDidMount}
        />
      </section>
    </Box>
  );
};
