import { Box, IconButton, Tab, Tabs, Tooltip } from '@material-ui/core';
import { Callback, ConsoleTab } from '@types';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { ConsoleTabEnum } from '@enums';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  consoleTab: ConsoleTabEnum;
  expandConsole: boolean;
  setConsoleTab: Callback<ConsoleTabEnum, void>;
  setShowConsole: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOutput: React.Dispatch<React.SetStateAction<boolean>>;
  setExpandConsole: React.Dispatch<React.SetStateAction<boolean>>;
  tabs: Array<ConsoleTab>;
}

export const ConsoleTabs: React.FC<IProps> = ({
  consoleTab,
  expandConsole,
  setConsoleTab,
  setShowConsole,
  setShowOutput,
  setExpandConsole,
  tabs,
}) => {
  const classes = useStyles();

  const handleExpandConsole = () => {
    setExpandConsole((expandConsole) => !expandConsole);
  };

  const handleCloseConsole = () => {
    setShowConsole(false);
    setShowOutput(false);
  };

  const handleTabChange = (_, newValue: ConsoleTabEnum): void =>
    setConsoleTab(newValue);

  return (
    <Box className={classes.root}>
      <Tabs
        variant="scrollable"
        value={consoleTab}
        indicatorColor="primary"
        onChange={handleTabChange}
        aria-label="console-tabs"
      >
        {tabs.map(({ title }) => (
          <Tab
            id={`${title}-tab`}
            aria-controls={`tab-panel-${title}`}
            key={title}
            label={title}
            value={title}
          />
        ))}
      </Tabs>
      <Box>
        <Tooltip
          placement="top"
          title={expandConsole ? `Shrink view` : `Expand view`}
        >
          <IconButton onClick={handleExpandConsole}>
            {expandConsole ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip placement="top" title="Minimize console">
          <IconButton onClick={handleCloseConsole}>
            <ArrowDropDownIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
