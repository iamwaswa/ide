import { Editor, OrNull } from '@types';
import { EditorLanguageEnum, EditorThemeEnum } from '@enums';

import React from 'react';
import { languageToEditorLanguage } from './utils';
import { useAssessmentContext } from '@components/assessment/context/hooks';

interface IArgs {
  editor: OrNull<Editor>;
}

interface IUseIDESetup {
  editorLanguage: EditorLanguageEnum;
  editorTheme: EditorThemeEnum;
}

export const useIDESetup = ({ editor }: IArgs): IUseIDESetup => {
  const { assessment } = useAssessmentContext();
  const [loadedFileData, setLoadedFileData] = React.useState(false);
  const editorTheme = React.useRef<EditorThemeEnum>(EditorThemeEnum.DARK);
  const [editorLanguage, setEditorLanguage] = React.useState<
    EditorLanguageEnum
  >(EditorLanguageEnum.JAVASCRIPT);

  React.useEffect(() => {
    setEditorLanguage(languageToEditorLanguage(assessment?.file?.language));

    if (!loadedFileData && assessment) {
      editor?.setValue(
        assessment.file.data
          .replace(/\\n/g, `\n`)
          .replace(/\\t/g, `\t`)
          .replace(/\\b/g, `\b`)
          .replace(/\\r/g, `\r`)
      );
      setLoadedFileData(true);
    }
  }, [editor, editorLanguage, editorTheme, assessment, loadedFileData]);

  return {
    editorLanguage,
    editorTheme: editorTheme.current,
  };
};
