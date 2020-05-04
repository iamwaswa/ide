import { AsideViewEnum } from '@enums';
import { Content } from './content';
import { Questions } from './questions';
import React from 'react';
import { useStyles } from './content/styles';

export const Aside: React.FC = () => {
  const [showLoader, setShowLoader] = React.useState<boolean>(true);
  const [view, setView] = React.useState<AsideViewEnum>(AsideViewEnum.SPLIT);
  const classes = useStyles({ view });

  const hideLoader = (): void => setShowLoader(false);

  return (
    <Content showLoader={showLoader} view={view} setView={setView}>
      <Questions
        rootStyle={classes.asideElement}
        showLoader={showLoader}
        hideLoader={hideLoader}
        view={view}
      />
    </Content>
  );
};
