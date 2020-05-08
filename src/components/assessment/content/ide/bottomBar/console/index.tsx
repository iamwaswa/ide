import { Collapse, Fade, LinearProgress } from '@material-ui/core';

import { ConsolePanels } from './panels';
import { ConsoleTabs } from './tabs';
import React from 'react';
import { useConsole } from './hooks';
import { useIDEStylesContext } from '../../context/hooks';
import { useStyles } from './styles';

interface IProps {
  runningCode: boolean;
  showConsole: boolean;
  setShowConsole: React.Dispatch<React.SetStateAction<boolean>>;
  showOutput: boolean;
  setShowOutput: React.Dispatch<React.SetStateAction<boolean>>;
  compilerResult?: any;
}

export const Console: React.FC<IProps> = ({
  runningCode,
  showConsole,
  setShowConsole,
  showOutput,
  setShowOutput,
  compilerResult,
}) => {
  const borderRadius = useIDEStylesContext();
  const {
    tabs,
    expandConsole,
    setExpandConsole,
    consoleTab,
    setConsoleTab,
  } = useConsole({
    compilerResult,
    runningCode,
    setShowConsole,
    showOutput,
  });
  const classes = useStyles({
    borderRadius,
    expandConsole,
  });

  return (
    <Fade in={showConsole} mountOnEnter unmountOnExit timeout={500}>
      <Collapse
        className={classes.collapse}
        in={showConsole}
        unmountOnExit
        classes={{
          wrapper: classes.wrapper,
        }}
      >
        {runningCode && (
          <LinearProgress className={classes.progress} color="primary" />
        )}
        <ConsoleTabs
          consoleTab={consoleTab}
          setConsoleTab={setConsoleTab}
          setShowConsole={setShowConsole}
          setShowOutput={setShowOutput}
          expandConsole={expandConsole}
          setExpandConsole={setExpandConsole}
          tabs={tabs}
        />
        <ConsolePanels
          consoleTab={consoleTab}
          tabs={tabs}
          expandConsole={expandConsole}
        />
      </Collapse>
    </Fade>
  );
};
