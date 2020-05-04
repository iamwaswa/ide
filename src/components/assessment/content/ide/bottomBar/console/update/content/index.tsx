import { Box, DialogContent, TextField } from '@material-ui/core';
import { Callback, TestCaseInput } from '@types';

import React from 'react';
import { useStyles } from './styles';

interface IProps {
  testCaseInputs: Array<TestCaseInput>;
  testCaseOutput: string;
  setTestCaseInputs: React.Dispatch<React.SetStateAction<Array<TestCaseInput>>>;
  setTestCaseOutput: Callback<string, void>;
}

export const Content: React.FC<IProps> = ({
  testCaseInputs,
  testCaseOutput,
  setTestCaseInputs,
  setTestCaseOutput,
}) => {
  const classes = useStyles();

  const updateInputs = (
    inputName: string
  ): Callback<React.ChangeEvent<HTMLInputElement>, void> => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void =>
    setTestCaseInputs(
      (currentInputs: Array<TestCaseInput>): Array<TestCaseInput> =>
        currentInputs.map(
          ({ name, value }: TestCaseInput): TestCaseInput => ({
            name,
            value: inputName === name ? event.target.value : value,
          })
        )
    );

  const updateOutput = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setTestCaseOutput(event.target.value);

  return (
    <DialogContent className={classes.dialogContent}>
      <Box>
        <Box className={classes.inputsContainer}>
          {testCaseInputs.map(({ name, value }) => (
            <TextField
              key={name}
              label={name}
              margin="dense"
              multiline
              placeholder={`Value for ${name}`}
              rows={5}
              size="medium"
              type="text"
              variant="outlined"
              value={value}
              onChange={updateInputs(name)}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <TextField
          label="Output"
          margin="dense"
          multiline
          placeholder={`Expected output`}
          rows={5}
          size="medium"
          type="text"
          variant="outlined"
          value={testCaseOutput}
          onChange={updateOutput}
        />
      </Box>
    </DialogContent>
  );
};
