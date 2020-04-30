import {
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

interface IProps {
  fields: State;
  type: AssessmentEnum;
}

export const SubmitPrompt: React.FC<IProps> = ({ fields, type }) => {
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
    <>
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        Add
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
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            type="submit"
            onClick={submitAssessment}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
