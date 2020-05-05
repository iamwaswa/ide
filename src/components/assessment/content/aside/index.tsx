import { AsideViewEnum } from '@enums';
import { Content } from './content';
import { Questions } from './questions';
import React from 'react';
import { useStyles } from './content/styles';

interface IProps {
  showLoader: boolean;
  hideLoader: () => void;
}

export const Aside: React.FC<IProps> = ({ showLoader, hideLoader }) => {
  const [view, setView] = React.useState<AsideViewEnum>(AsideViewEnum.SPLIT);
  const classes = useStyles({ view });

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
