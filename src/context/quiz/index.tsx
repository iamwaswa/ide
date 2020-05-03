import React from 'react';

export interface IUseQuizContext {
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuizContext = React.createContext<Partial<IUseQuizContext>>({});

export const QuizContextProvider: React.FC = ({ children }) => {
  const [start, setStart] = React.useState<boolean>(false);

  return (
    <QuizContext.Provider value={{ start, setStart }}>
      {children}
    </QuizContext.Provider>
  );
};
