import React from 'react';
import { useGradingContext } from './../../context/hooks';

interface IUseScore {
  displayText: string;
  getAriaValueText: () => string;
}

export const useScore = (): IUseScore => {
  const { score, total } = useGradingContext();
  const preText = React.useRef<string>(`Score: `);
  const [valueText, setValueText] = React.useState<string>(`${score}/${total}`);

  const displayText = React.useMemo(
    (): string => `${preText.current}${valueText}`,
    [valueText]
  );

  React.useEffect((): void => {
    setValueText(`${score}/${total}`);
  }, [score, total]);

  const getAriaValueText = (): string => `${preText.current}${valueText}`;

  return {
    displayText,
    getAriaValueText,
  };
};
