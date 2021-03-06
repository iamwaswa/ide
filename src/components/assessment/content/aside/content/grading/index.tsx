import { Box, Fade, Tab, Tabs } from '@material-ui/core';

import { Annotate } from './annotate';
import { AsideViewEnum } from '@enums';
import { Comments } from './comments';
import React from 'react';
import { Score } from './score';
import { TabEnum } from './context/reducer';
import { useGradingContext } from './context/hooks';
import { useStyles } from './styles';

interface IProps {
  rootStyle: string;
  view: AsideViewEnum;
}

export const Grading: React.FC<IProps> = ({ rootStyle, view }) => {
  const classes = useStyles({ view });
  const { tab, updateTab } = useGradingContext();

  return (
    <Fade
      in={view !== AsideViewEnum.QUESTIONS}
      timeout={500}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Box className={`${rootStyle} ${classes.gradingContainer}`}>
        <Tabs value={tab} onChange={updateTab} aria-label="grading-tabs">
          {Object.values(TabEnum).map(
            (tabOption: TabEnum): JSX.Element => (
              <Tab
                key={tabOption}
                id={`${tabOption}-tab`}
                aria-controls={`tab-panel-${tabOption}`}
                classes={{
                  root: classes.tabRoot,
                }}
                label={tabOption}
                value={tabOption}
              />
            )
          )}
        </Tabs>
        <Box className={classes.content}>
          <Score
            constrainWidthClassName={classes.constrainWidth}
            show={tab === TabEnum.SCORE}
            tab={TabEnum.SCORE}
          />
          <Comments
            constrainWidthClassName={classes.constrainWidth}
            view={view}
            show={tab === TabEnum.COMMENTS}
            tab={TabEnum.COMMENTS}
          />
          <Annotate
            constrainWidthClassName={classes.constrainWidth}
            show={tab === TabEnum.ANNOTATE}
            tab={TabEnum.ANNOTATE}
          />
        </Box>
      </Box>
    </Fade>
  );
};
