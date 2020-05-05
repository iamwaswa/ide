import { ConsoleTabEnum, RoleEnum } from '@enums';

import { ConsoleTab } from '@types';
import { Output } from '../output';
import React from 'react';
import { TestCases } from '../testCases';
import { useAuthContext } from '@context/auth/hooks';

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
  const { role } = useAuthContext();
  const [consoleTab, setConsoleTab] = React.useState<ConsoleTabEnum>(
    role === RoleEnum.STUDENT
      ? ConsoleTabEnum.TEST_CASES
      : ConsoleTabEnum.OUTPUT
  );
  const [expandConsole, setExpandConsole] = React.useState<boolean>(true);
  const tabs = React.useMemo<Array<ConsoleTab>>((): Array<ConsoleTab> => {
    const allTabs = [
      {
        title: ConsoleTabEnum.OUTPUT,
        component: (
          <Output compilerResult={compilerResult} runningCode={runningCode} />
        ),
      },
    ];

    if (role === RoleEnum.STUDENT) {
      allTabs.unshift({
        title: ConsoleTabEnum.TEST_CASES,
        component: <TestCases />,
      });
    }

    return allTabs;
  }, [compilerResult, role, runningCode]);

  React.useEffect(() => {
    if (showOutput) {
      setShowConsole(true);
      setConsoleTab(ConsoleTabEnum.OUTPUT);
    }
  }, [showOutput, setShowConsole]);

  return {
    tabs,
    expandConsole,
    setExpandConsole,
    consoleTab,
    setConsoleTab,
  };
};
