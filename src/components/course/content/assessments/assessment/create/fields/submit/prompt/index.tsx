import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';
import { Submit } from '../submit';
import { useHistory } from 'react-router-dom';

export const SubmitPrompt = ({ fields }) => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [assessment, setAssessment] = React.useState(null);
  const reset = () => {
    history.goBack();
  };
  const submitAssessment = () => {
    const { lang, vers } = getlangAndVersion();
    const fileInput = {
      name: fields.fileName,
      lastModified: new Date(),
      language: lang,
      versionIndex: vers,
      data: fields.file,
    };
    setAssessment({
      name: fields.name,
      startDate: fields.startDate,
      type: fields.assessmentType.toUpperCase(),
      durationInSeconds: fields.durationInSeconds * 60,
      dueDate: fields.dueDate,
      questions: [fields.q1, fields.q2, fields.q3], // could be fixed a second null question will be generated if it is empty
      file: fileInput,
      script: fields.script,
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const getlangAndVersion = () => ({
    lang: fields.language.lang,
    vers: fields.language.vers,
  });
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Submit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Submit new assessment'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Assessment will be visible to all students enroll in this course. Do
            you wish to publish this assessment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Submit
            assessment={assessment}
            reset={reset}
            submitAssessment={submitAssessment}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};
