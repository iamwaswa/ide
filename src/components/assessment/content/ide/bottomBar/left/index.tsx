import { Box, Button } from '@material-ui/core';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import React from 'react';
import { useAssessmentContext } from '@components/assessment/context/hooks';
import { useDownloadFile } from '@hooks/downloadFile';
import { useStyles } from './styles';

interface IProps {
  getEditorValue: () => string;
  showConsole: boolean;
  setShowConsole: React.Dispatch<React.SetStateAction<boolean>>;
  setShowOutput: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BottomBarLeft: React.FC<IProps> = ({
  getEditorValue,
  showConsole,
  setShowConsole,
  setShowOutput,
}) => {
  const classes = useStyles();
  const { assessment } = useAssessmentContext();
  const setFileToDownload = useDownloadFile();

  const handleToggleConsole = (): void =>
    setShowConsole((showing) => {
      if (showing) {
        setShowOutput(false);
      }

      return !showing;
    });

  const downloadFile = (): void => {
    if (assessment) {
      setFileToDownload({
        name: assessment.file.name,
        content: getEditorValue(),
      });
    }
  };

  return (
    <Box className={classes.container}>
      <Button
        color="primary"
        variant="contained"
        startIcon={showConsole ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
        onClick={handleToggleConsole}
      >
        Console
      </Button>
      <Button
        color="secondary"
        variant="contained"
        startIcon={<CloudDownloadIcon />}
        onClick={downloadFile}
      >
        Download file
      </Button>
    </Box>
  );
};
