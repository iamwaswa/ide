import { ConsoleTab } from '@types';
import { ConsoleTabEnum } from '@enums';
import { Output } from '../output';
import React from 'react';
import { TestCases } from '../testCases';

interface IArgs {
  runningCode: boolean;
  showConsole: boolean;
  setShowConsole: React.Dispatch<React.SetStateAction<boolean>>;
  showOutput: boolean;
  compilerResult?: any;
}

interface IUseConsole {
  tabs: Array<ConsoleTab>;
  expandConsole: boolean;
  setExpandConsole: React.Dispatch<React.SetStateAction<boolean>>;
  consoleTab: ConsoleTabEnum;
  setConsoleTab: React.Dispatch<React.SetStateAction<ConsoleTabEnum>>;
}

export const useConsole = ({
  runningCode,
  showConsole,
  setShowConsole,
  showOutput,
  compilerResult,
}: IArgs): IUseConsole => {
  const [consoleTab, setConsoleTab] = React.useState<ConsoleTabEnum>(
    ConsoleTabEnum.TEST_CASES
  );
  const [expandConsole, setExpandConsole] = React.useState<boolean>(true);
  const tabs = React.useMemo<Array<ConsoleTab>>(
    (): Array<ConsoleTab> => [
      { title: ConsoleTabEnum.TEST_CASES, component: <TestCases /> },
      {
        title: ConsoleTabEnum.OUTPUT,
        component: (
          <Output compilerResult={compilerResult} runningCode={runningCode} />
        ),
      },
    ],
    [compilerResult, runningCode]
  );

  React.useEffect(() => {
    if (showOutput) {
      setShowConsole(true);
      setConsoleTab(ConsoleTabEnum.OUTPUT);
    }
  }, [showOutput, setShowConsole]);

  React.useEffect(() => {
    if (!showOutput && showConsole) {
      setConsoleTab(ConsoleTabEnum.TEST_CASES);
    }
  }, [showConsole, showOutput]);

  return {
    tabs,
    expandConsole,
    setExpandConsole,
    consoleTab,
    setConsoleTab,
  };
};
