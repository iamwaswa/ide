import { Action, ActionEnum } from '../../../reducer';
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
} from '@material-ui/core';

import { Callback } from '@types';
import Helmet from 'react-helmet';
import React from 'react';
import ReactQuill from 'react-quill';

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
  const handleQuestionChange = (content: string): void => {
    updateFields({
      type: ActionEnum.QUESTIONS_CHANGE,
      content,
      id,
    });
  };

  return (
    <>
      <Helmet>
        <link href="/styles/quill.snow.css" rel="stylesheet" />
      </Helmet>
      <FormControl>
        <FormControlLabel
          control={
            <ReactQuill
              formats={[
                `align`,
                `background`,
                `blockquote`,
                `bold`,
                `bullet`,
                `code`,
                `code-block`,
                `color`,
                `direction`,
                `font`,
                `formula`,
                `header`,
                `image`,
                `italic`,
                `indent`,
                `link`,
                `list`,
                `script`,
                `size`,
                `strike`,
                `underline`,
                `video`,
              ]}
              modules={{
                toolbar: [
                  [{ font: [] }],
                  [{ size: [`small`, false, `large`, `huge`] }],
                  [{ header: [1, 2, 3, 4, 5, 6, false] }],
                  [{ align: [] }],
                  [`bold`, `italic`, `underline`, `strike`],
                  [`blockquote`, `code-block`],
                  [{ list: `ordered` }, { list: `bullet` }],
                  [{ script: `sub` }, { script: `super` }],
                  [{ indent: `-1` }, { indent: `+1` }],
                  [{ direction: `rtl` }],
                  [{ color: [] }],
                  [{ background: [] }],
                  [`link`, `image`, `video`],
                  [`clean`],
                ],
              }}
              placeholder="Enter your question here..."
              theme="snow"
              value={question}
              onChange={handleQuestionChange}
            />
          }
          label={label}
        />
        <FormHelperText>
          Write detailed instructions for students to follow
        </FormHelperText>
      </FormControl>
    </>
  );
};
