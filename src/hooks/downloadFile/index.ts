import { OrNull } from '@types';
import React from 'react';

type DownloadableFile = {
  name: string;
  content: string;
};

export const useDownloadFile = (): ((
  downloadableFile: DownloadableFile
) => void) => {
  const [fileName, setFileName] = React.useState<OrNull<string>>(null);
  const [fileContent, setFileContent] = React.useState<OrNull<string>>(null);

  React.useEffect(() => {
    if (fileName && fileContent) {
      // Source: https://stackoverflow.com/questions/44656610/download-a-string-as-txt-file-in-react
      const fileToDownload = new Blob([fileContent], {
        type: `content/plain`,
      });

      const element = document.createElement(`a`);
      element.href = URL.createObjectURL(fileToDownload);
      element.download = fileName;
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();

      setFileName(null);
      setFileContent(null);
    }
  }, [fileContent, fileName]);

  const setFileToDownload = ({ name, content }: DownloadableFile): void => {
    setFileName(name);
    setFileContent(content);
  };

  return setFileToDownload;
};
