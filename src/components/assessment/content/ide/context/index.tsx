import React from 'react';

export const IDEStylesContext = React.createContext<string>(``);

export const IDEStylesContextProvider: React.FC = ({ children }) => {
  const borderRadius = React.useRef(`3px`);

  return (
    <IDEStylesContext.Provider value={borderRadius.current}>
      {children}
    </IDEStylesContext.Provider>
  );
};
