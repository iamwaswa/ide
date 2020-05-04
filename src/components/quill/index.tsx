import { Box, Fade, FormControlLabel } from '@material-ui/core';
import { formats, modules } from './utils';

import { Callback } from '@types';
import { Helmet } from 'react-helmet';
import { QuillLoader } from './loader';
import React from 'react';
import ReactQuill from 'react-quill';
import { useStyles } from './styles';

interface IProps {
  question: string;
  label: React.ReactNode;
  theme: `snow` | `bubble`;
  labelClasses?: {
    root?: string;
    labelPlacementTop?: string;
    label?: string;
  };
  placeholder?: string;
  showQuillLoader?: boolean;
  timeout?: number;
  hideQuillLoader?: () => void;
  onContentChange?: Callback<string, void>;
}

export const Quill: React.FC<IProps> = ({
  question,
  label,
  theme,
  labelClasses,
  placeholder,
  showQuillLoader = false,
  hideQuillLoader,
  timeout,
  onContentChange,
}) => {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={`//cdn.quilljs.com/1.2.6/quill.${theme}.css`}
        />
      </Helmet>
      <QuillLoader
        showLoader={showQuillLoader}
        hideLoader={hideQuillLoader}
        timeout={timeout}
      />
      <Fade in={!showQuillLoader} timeout={500}>
        <Box className={classes.container}>
          <FormControlLabel
            classes={labelClasses}
            control={
              <ReactQuill
                bounds={classes.container}
                formats={formats}
                modules={modules}
                placeholder={placeholder}
                theme={theme}
                value={question}
                onChange={onContentChange}
              />
            }
            label={label}
            labelPlacement="top"
          />
        </Box>
      </Fade>
    </>
  );
};
