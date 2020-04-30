import { ILanguagesAndVersions } from '..';
import { MenuItem } from '@material-ui/core';
import React from 'react';

interface IVersion {
  versionDisplay: string;
  versionIndex: number;
}

export const Display: React.FC<ILanguagesAndVersions> = ({
  language,
  languageDisplay,
  versions,
}) => {
  return (
    <>
      {versions.map(
        ({ versionIndex, versionDisplay }: IVersion): JSX.Element => (
          <MenuItem
            key={`${language}-${versionIndex}`}
            value={JSON.stringify({ language, versionIndex })}
          >
            {`${languageDisplay} ${versionDisplay}`}
          </MenuItem>
        )
      )}
    </>
  );
};
