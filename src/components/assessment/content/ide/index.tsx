import { Box, Fade } from '@material-ui/core';

import { BottomBar } from './bottomBar';
import { CodeEditor } from './editor';
import React from 'react';
import { useIDE } from './hooks';
import { useIDEStylesContext } from './context/hooks';
import { useStyles } from './styles';

interface IProps {
  loading: boolean;
}

export const IDE: React.FC<IProps> = ({ loading }) => {
  const {
    editorLanguage,
    editorTheme,
    getEditorValue,
    setEditor,
    submittedDate,
  } = useIDE();
  const borderRadius = useIDEStylesContext();
  const classes = useStyles({ borderRadius });

  return (
    <Fade in={!loading} timeout={500} mountOnEnter={true} unmountOnExit={true}>
      <Box className={classes.container}>
        <CodeEditor
          editorLanguage={editorLanguage}
          editorTheme={editorTheme}
          setEditor={setEditor}
        />
        <BottomBar
          getEditorValue={getEditorValue}
          submittedDate={submittedDate}
        />
      </Box>
    </Fade>
  );
};
