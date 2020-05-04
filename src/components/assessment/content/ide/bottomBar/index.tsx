import { Box, Typography } from '@material-ui/core';

import { BottomBarLeft } from './left';
import { BottomBarRight } from './right';
// import { COMPILE_CODE_QUERY } from './graphql';
import { Console } from './console';
import { OrNull } from '@types';
import React from 'react';
// import { useLazyQuery } from '@apollo/react-hooks';
import { useStyles } from './styles';

interface IProps {
  getEditorValue: () => string;
  submittedDate: OrNull<string>;
}

export const BottomBar: React.FC<IProps> = ({
  getEditorValue,
  submittedDate,
}) => {
  const classes = useStyles();
  const [showConsole, setShowConsole] = React.useState<boolean>(false);
  const [showOutput, setShowOutput] = React.useState<boolean>(false);

  // * fetchPolicy here is network-only so that every run code query
  // * returns a new output for the current code in the editor,
  // * otherwise the cached output would be returned meaning new code
  // * will not be evaluated
  /*const [runCodeAsync, { loading, data, error }] = useLazyQuery(
    COMPILE_CODE_QUERY,
    {
      fetchPolicy: `network-only`,
    }
  );

  React.useEffect(() => {
    if (loading) {
      setShowOutput(true);
    }
  }, [loading]);*/

  return (
    <Box className={classes.root}>
      <Console
        compilerResult={/*data*/ undefined}
        runningCode={/*loading*/ false}
        showConsole={showConsole}
        showOutput={showOutput}
        setShowOutput={setShowOutput}
        setShowConsole={setShowConsole}
      />
      <Box className={classes.bottomBarLeft}>
        <BottomBarLeft
          getEditorValue={getEditorValue}
          showConsole={showConsole}
          setShowConsole={setShowConsole}
          setShowOutput={setShowOutput}
        />
        {submittedDate && (
          <Typography color="textSecondary" variant="caption">
            {`Automatically submitted at ${submittedDate}`}
          </Typography>
        )}
        <BottomBarRight
          getEditorValue={getEditorValue}
          runCodeAsync={/* runCodeAsync */ (): void => console.log(`Running!`)}
          runningCode={/* loading*/ false}
          runCodeError={/* error */ undefined}
        />
      </Box>
    </Box>
  );
};
