import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import { AssessmentEnum } from '@enums';
import React from 'react';
import { State } from '../../reducer';
import { useStyles } from './styles';

interface IProps {
  fields: State;
  type: AssessmentEnum;
}

export const SubmitPrompt: React.FC<IProps> = ({ fields, type }) => {
  console.log(fields);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const lowerCaseType = React.useMemo(
    (): string => type.substring(0).toLowerCase(),
    [type]
  );

  const submitAssessment = () => {
    /*const { language, versionIndex } = JSON.parse(fields.file.language);
    {
      ...fields,
      type,
      script: fields.script,
      questions: Array.from(fields.questions.values()),
      durationInSeconds: type === AssessmentEnum.QUIZ ? Utils.calculateDurationInSeconds(
        fields.duration,
        fields.durationUnit
      ) : undefined,
      file: { ...fields.file, language, versionIndex },
    }*/
  };

  const handleOpen = (): void => setOpen(true);

  const handleClose = (): void => setOpen(false);

  return (
    <Box className={classes.submit}>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create {lowerCaseType}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        <DialogTitle id="title">Add new {lowerCaseType}</DialogTitle>
        <DialogContent>
          <DialogContentText id="description">
            Do you wish to publish this {lowerCaseType}?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button color="inherit" type="submit" onClick={submitAssessment}>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
