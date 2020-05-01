import { Action, ActionEnum } from '../../../reducer';
import { Box, FormControlLabel, IconButton, Tooltip } from '@material-ui/core';
import { formats, modules } from './utils';

import { Callback } from '@types';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { Helmet } from 'react-helmet';
import React from 'react';
import ReactQuill from 'react-quill';
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
    <>
      <Helmet>
        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
      </Helmet>
      <Box className={classes.container}>
        <FormControlLabel
          classes={{
            root: classes.label,
            labelPlacementTop: classes.top,
            label: classes.labelContent,
          }}
          control={
            <ReactQuill
              bounds={classes.container}
              formats={formats}
              modules={modules}
              placeholder="Write detailed instructions for students to follow"
              theme="snow"
              value={question}
              onChange={handleQuestionChange}
            />
          }
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
          labelPlacement="top"
        />
      </Box>
    </>
  );
};
