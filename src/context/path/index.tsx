import React from 'react';

export interface IUsePathContext {
  path: Map<string, string>;
  setPath: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}

export const PathContext = React.createContext<Partial<IUsePathContext>>({});

export const PathContextProvider: React.FC = ({ children }) => {
  const [path, setPath] = React.useState<Map<string, string>>(
    new Map<string, string>()
  );

  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  );
};
