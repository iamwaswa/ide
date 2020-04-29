import AttachmentIcon from '@material-ui/icons/Attachment';
import CommentIcon from '@material-ui/icons/Comment';
import React from 'react';
import { Submission } from '@types';
import { TableCell } from '@material-ui/core';
import { ToggleButton } from './toggleButton';
import { useDownloadFile } from '@hooks/downloadFile';

interface IProps {
  showComments: boolean;
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
  submission?: Submission;
}

export const ToggleFeedback: React.FC<IProps> = ({
  showComments,
  setShowComments,
  submission,
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
      <ToggleButton
        disabled={file === undefined}
        iconButtonAriaLabel="attachment"
        tooltipTitle="Download feedback file"
        handleClick={downloadFile}
      >
        <AttachmentIcon fontSize="small" />
      </ToggleButton>
      <ToggleButton
        disabled={comments === undefined}
        iconButtonAriaLabel="comments"
        tooltipTitle={`${showComments ? `Hide` : `View`} comments`}
        handleClick={handleToggleComments}
      >
        <CommentIcon fontSize="small" />
      </ToggleButton>
    </TableCell>
  );
};
