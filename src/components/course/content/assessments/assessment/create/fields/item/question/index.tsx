import { Editor } from '@tinymce/tinymce-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import { useStyles } from '../../../styles';

export const QuestionItem = ({ fields, setFields, index }) => {
  const handleEditorChange = (field) => (content, editor) => {
    setFields({
      ...fields,
      [field]: content,
    });
  };
  const classes = useStyles();
  return (
    <div className={`${classes.questionsMargin} `}>
      <Typography variant="h5" className={classes.addMargin}>
        {'Question ' + index}
      </Typography>
      <Typography className={classes.addMargin}>
        Write detail instructions for students to follow
      </Typography>
      <br />
      <Editor
        apiKey="87x11m0hb70zqzrxr4c251m6ws59saa0a8o68kehkpmmdx0y"
        initialValue="<p></p>"
        init={{
          height: 250,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor |' +
            ' alignleft aligncenter alignright alignjustify |' +
            'bullist numlist outdent indent | removeformat | help',
        }}
        onEditorChange={handleEditorChange(`q${index}`)}
      />
    </div>
  );
};
