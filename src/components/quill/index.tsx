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
  load?: boolean;
  timeout?: number;
  onContentChange?: Callback<string, void>;
}

export const Quill: React.FC<IProps> = ({
  question,
  label,
  theme,
  labelClasses,
  placeholder,
  load = false,
  timeout,
  onContentChange,
}) => {
  const [showLoader, setShowLoader] = React.useState<boolean>(load);
  const classes = useStyles();

  const hideLoader = (): void => setShowLoader(false);

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href={`//cdn.quilljs.com/1.2.6/quill.${theme}.css`}
        />
      </Helmet>
      <QuillLoader
        showLoader={showLoader}
        hideLoader={hideLoader}
        timeout={timeout}
      />
      <Fade in={!showLoader} timeout={500}>
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
