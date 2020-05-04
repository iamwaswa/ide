import { Box } from '@material-ui/core';
import { Callback } from '@types';
import { EditorThemeEnum } from '@enums';
import MonacoEditor from '@monaco-editor/react';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  editorTheme: EditorThemeEnum;
  editorLanguage: string;
  setEditor: Callback<any, void>;
}

export const CodeEditor: React.FC<IProps> = ({
  setEditor,
  editorLanguage,
  editorTheme,
}) => {
  const [editorLoaded, setEditorLoaded] = React.useState<boolean>(false);
  const [containerHeight, setContainerHeight] = React.useState<number>(0);
  const classes = useStyles({
    editorTheme,
  });
  const containerRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!editorLoaded && containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef, editorLoaded]);

  const handleEditorDidMount = (_: () => string, editor: any): void => {
    setEditorLoaded(true);
    setEditor(editor);
  };

  return (
    <Box className={classes.container}>
      <section className={classes.editorContainer} ref={containerRef}>
        <MonacoEditor
          height={editorLoaded ? `${containerHeight}px` : `98%`}
          language={editorLanguage}
          theme={editorTheme}
          editorDidMount={handleEditorDidMount}
        />
      </section>
    </Box>
  );
};
