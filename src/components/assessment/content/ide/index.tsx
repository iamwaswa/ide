import { BottomBar } from './bottomBar';
import { Box } from '@material-ui/core';
import { CodeEditor } from './editor';
import React from 'react';
import { useIDE } from './hooks';
import { useIDEStylesContext } from './context/hooks';
import { useStyles } from './styles';

export const IDE = () => {
  const borderRadius = useIDEStylesContext();
  const classes = useStyles({ borderRadius });
  const {
    editorLanguage,
    editorTheme,
    getEditorValue,
    setEditor,
    submittedDate,
  } = useIDE();

  return (
    <Box className={classes.root}>
      <Box className={classes.codeEditor}>
        <CodeEditor
          editorLanguage={editorLanguage}
          editorTheme={editorTheme}
          setEditor={setEditor}
        />
      </Box>
      <BottomBar
        getEditorValue={getEditorValue}
        submittedDate={submittedDate}
      />
    </Box>
  );
};
