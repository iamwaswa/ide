import { IconButton, TableCell } from '@material-ui/core';

import AttachmentIcon from '@material-ui/icons/Attachment';
import CommentIcon from '@material-ui/icons/Comment';
import React from 'react';
import { Submission } from '@types';
import { useDownloadFile } from '@hooks/downloadFile';

interface IProps {
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
  submission?: Submission;
}

export const ToggleFeedback: React.FC<IProps> = ({
  submission,
  setShowComments,
}) => {
  const setFileToDownload = useDownloadFile();
  const comments = React.useMemo(() => submission?.feedback?.comments, [
    submission,
  ]);
  const file = React.useMemo(() => submission?.feedback?.file, [submission]);

  const downloadFile = () => {
    if (file) {
      setFileToDownload({ name: file.name, content: file.data });
    }
  };

  const handleToggleComments = () => {
    if (comments) {
      setShowComments((showing: boolean): boolean => !showing);
    }
  };

  return (
    <TableCell>
      <IconButton
        aria-label="attachment"
        color="primary"
        disabled={file === null}
        onClick={downloadFile}
      >
        <AttachmentIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="comments"
        color="primary"
        disabled={comments === null}
        onClick={handleToggleComments}
      >
        <CommentIcon fontSize="small" />
      </IconButton>
    </TableCell>
  );
};
