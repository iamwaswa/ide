import { AsideViewEnum, RoleEnum } from '@enums';
import { Box, Button, ButtonGroup } from '@material-ui/core';

import { Grading } from './grading';
import { GradingContextProvider } from './grading/context';
import { Questions } from './questions';
import React from 'react';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';

export const Aside: React.FC = () => {
  const { role } = useAuthContext();
  const [view, setView] = React.useState<AsideViewEnum>(AsideViewEnum.SPLIT);
  const classes = useStyles({ view });

  const handleChangeView = (newView: AsideViewEnum): (() => void) => (): void =>
    setView(newView);

  return (
    <Box className={classes.root}>
      {role === RoleEnum.INSTRUCTOR && (
        <ButtonGroup
          className={classes.buttonGroup}
          size="small"
          color="primary"
          aria-label="Aside view toggle"
        >
          {Object.values(AsideViewEnum).map(
            (viewOption: AsideViewEnum): JSX.Element => (
              <Button
                key={viewOption}
                color={view === viewOption ? `primary` : `default`}
                onClick={handleChangeView(viewOption)}
              >
                {viewOption}
              </Button>
            )
          )}
        </ButtonGroup>
      )}
      <Questions rootStyle={classes.asideElement} view={view} />
      {role === RoleEnum.INSTRUCTOR && (
        <GradingContextProvider>
          <Grading rootStyle={classes.asideElement} view={view} />
        </GradingContextProvider>
      )}
    </Box>
  );
};
