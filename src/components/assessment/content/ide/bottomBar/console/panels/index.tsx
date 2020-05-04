import { Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  consoleTab: any;
  expandConsole: boolean;
  tabs: Array<any>;
}

export const ConsolePanels: React.FC<IProps> = ({
  consoleTab,
  tabs,
  expandConsole,
}) => {
  const classes = useStyles({ expandConsole });

  return (
    <>
      {tabs.map(({ title, component }) => (
        <Box
          className={consoleTab === title ? classes.root : classes.rootDefault}
          key={title}
          role="tab-panel"
          id={`tab-panel-${title}`}
          aria-labelledby={`${title}-tab`}
        >
          {component}
        </Box>
      ))}
    </>
  );
};
