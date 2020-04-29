import { IconButton, Tooltip } from '@material-ui/core';

import { Callback } from '@types';
import React from 'react';

interface IProps {
  disabled: boolean;
  iconButtonAriaLabel: string;
  tooltipTitle: string;
  handleClick: Callback<React.MouseEvent, void>;
}

export const ToggleButton: React.FC<IProps> = ({
  children,
  disabled,
  iconButtonAriaLabel,
  tooltipTitle,
  handleClick,
}) => {
  const [showTooltip, setShowTooltip] = React.useState<boolean>(false);

  const toggleTooltip = (state: boolean): (() => void) => () => {
    setShowTooltip(state);
  };

  return (
    <Tooltip open={showTooltip} placement="top" title={tooltipTitle}>
      <IconButton
        aria-label={iconButtonAriaLabel}
        color="primary"
        disabled={disabled}
        onClick={handleClick}
        onFocus={toggleTooltip(true)}
        onBlur={toggleTooltip(false)}
        onMouseEnter={toggleTooltip(true)}
        onMouseOver={toggleTooltip(true)}
        onMouseLeave={toggleTooltip(false)}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};
