import { TextField, Typography } from '@material-ui/core';

import React from 'react';
import { useStyles } from '../../../styles';

export const ScriptItem = ({ fields, setFields }) => {
  const classes = useStyles();
  const handleChange = (field) => (event) => {
    setFields({
      ...fields,
      [field]: event.target.value,
    });
  };
  return (
    <div>
      <Typography variant="h5" className={classes.addMargin}>
        Script
      </Typography>
      <Typography className={classes.addMargin}>
        Write necessary script for the assessment
      </Typography>
      <TextField
        id="script-text"
        className={classes.addMargin}
        variant="outlined"
        onChange={handleChange(`script`)}
        type="text"
        label="Script"
        fullWidth
        multiline
        rows={10}
      />
    </div>
  );
};
