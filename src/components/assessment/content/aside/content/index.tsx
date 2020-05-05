import { AsideViewEnum, RoleEnum } from '@enums';
import { Box, Button, ButtonGroup, Fade } from '@material-ui/core';

import { Callback } from '@types';
import { Grading } from './grading';
import { GradingContextProvider } from './grading/context';
import React from 'react';
import { useAuthContext } from '@context/auth/hooks';
import { useStyles } from './styles';

interface IProps {
  showLoader: boolean;
  view: AsideViewEnum;
  setView: Callback<AsideViewEnum, void>;
}

export const Content: React.FC<IProps> = ({
  children,
  showLoader,
  view,
  setView,
}) => {
  const { role } = useAuthContext();
  const classes = useStyles({ view });
  const showInstructorContent = React.useMemo(
    (): boolean => role === RoleEnum.INSTRUCTOR && !showLoader,
    [role, showLoader]
  );

  const handleChangeView = (newView: AsideViewEnum): (() => void) => (): void =>
    setView(newView);

  return (
    <Box className={classes.wrapper}>
      {showInstructorContent && (
        <Fade in={true} timeout={500}>
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
        </Fade>
      )}
      <Box className={classes.container}>
        {children}
        {showInstructorContent && (
          <Fade in={true} timeout={500}>
            <GradingContextProvider>
              <Grading rootStyle={classes.asideElement} view={view} />
            </GradingContextProvider>
          </Fade>
        )}
      </Box>
    </Box>
  );
};
