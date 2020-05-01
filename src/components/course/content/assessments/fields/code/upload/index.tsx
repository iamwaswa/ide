import { Button } from '@material-ui/core';
import { Callback } from '@types';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import React from 'react';
import { Utils } from '@utils';
import { useStyles } from './styles';

interface IProps {
  defaultButtonText: string;
  name: string;
  updateData: Callback<string, void>;
  updateName?: Callback<string, void>;
}

export const Upload: React.FC<IProps> = ({
  defaultButtonText,
  name,
  updateData,
  updateName,
}) => {
  const input = React.useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = React.useState<boolean>(false);
  const [buttonText, setButtonText] = React.useState<string>(defaultButtonText);
  const [updatedButtonText, setUpdatedButtonText] = React.useState<boolean>(
    false
  );
  const classes = useStyles();

  const handleFileInputClick = (): void => input.current?.click();

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.files) {
      setButtonText(event.target.files[0].name);
      setUpdatedButtonText(true);
      updateName?.(event.target.files[0].name);
    }

    setUploading(true);

    Utils.readSingleFileAsText(event.target.files, (result: string): void => {
      updateData(result);
      setUploading(false);
    });
  };

  return (
    <>
      <input
        accept="/*"
        className={classes.file}
        ref={input}
        type="file"
        onChange={handleFileChange}
      />
      <Button
        className={classes.uploadButton}
        classes={{ label: classes.buttonLabel }}
        color="inherit"
        disabled={uploading}
        variant="outlined"
        onClick={handleFileInputClick}
      >
        {updatedButtonText ? (
          <CheckRoundedIcon color="inherit" fontSize="small" />
        ) : null}
        {uploading
          ? `Uploading...`
          : `${updatedButtonText ? `${name}: ` : ``}${buttonText}`}
      </Button>
    </>
  );
};
