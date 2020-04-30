import { Action, ActionEnum } from '../../reducer';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

import { Callback } from '@types';
import { DurationUnitEnum } from '@enums';
import React from 'react';

interface IProps {
  addMarginClassName: string;
  updateFields: Callback<Action, void>;
  value?: DurationUnitEnum;
}

export const DurationUnitItem: React.FC<IProps> = ({
  addMarginClassName,
  value,
  updateFields,
}) => {
  const handleDurationUnitChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ): void => {
    updateFields({
      type: ActionEnum.OTHER_FIELD_CHANGE,
      name: `durationUnit`,
      value: event.target.value as DurationUnitEnum,
    });
  };

  return (
    <FormControl variant="outlined" className={addMarginClassName}>
      <InputLabel id="durationUnitLabel">Duration unit</InputLabel>
      <Select
        labelId="durationUnitLabel"
        id="durationUnit"
        value={value}
        onChange={handleDurationUnitChange}
      >
        {Object.values(DurationUnitEnum).map(
          (durationUnit: DurationUnitEnum): JSX.Element => (
            <MenuItem key={durationUnit} value={durationUnit}>
              <em>{`${durationUnit
                .substring(0, 1)
                .toUpperCase()}${durationUnit.substring(1).toLowerCase()}`}</em>
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};
