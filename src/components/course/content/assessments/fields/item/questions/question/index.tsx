import { Action, ActionEnum } from '../../../reducer';
import { IconButton, Tooltip } from '@material-ui/core';

import { Callback } from '@types';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Quill } from '@components/quill';
import React from 'react';
import { useStyles } from './styles';

interface IProps {
  id: string;
  label: string;
  question: string;
  updateFields: Callback<Action, void>;
}

export const Question: React.FC<IProps> = ({
  id,
  label,
  question,
  updateFields,
}) => {
  const classes = useStyles();

  const handleDeleteQuestion = (id: string): (() => void) => (): void => {
    updateFields({ type: ActionEnum.DELETE_QUESTION, id });
  };

  const handleQuestionChange = (content: string): void => {
    updateFields({
      type: ActionEnum.QUESTIONS_CHANGE,
      content: content === `<p><br></p>` ? `` : content,
      id,
    });
  };

  return (
    <Quill
      labelClasses={{
        root: classes.label,
        labelPlacementTop: classes.top,
        label: classes.labelContent,
      }}
      label={
        <>
          <Tooltip placement="top" title={`Delete ${label}`}>
            <IconButton onClick={handleDeleteQuestion(id)}>
              <DeleteRoundedIcon color="secondary" />
            </IconButton>
          </Tooltip>
          {label}
        </>
      }
      placeholder="Write detailed instructions for students to follow"
      question={question}
      theme="snow"
      onContentChange={handleQuestionChange}
    />
  );
};
