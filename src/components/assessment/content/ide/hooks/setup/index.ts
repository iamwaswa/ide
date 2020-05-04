import { EditorLanguageEnum, EditorThemeEnum } from '@enums';

import React from 'react';
import { useAssessmentContext } from '@components/assessment/context/hooks';

interface IArgs {
  editor: any;
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
  >(EditorLanguageEnum.NODEJS);

  React.useEffect(() => {
    if (editorLanguage !== assessment?.file.language) {
      setEditorLanguage(
        (currentLanguage: EditorLanguageEnum): EditorLanguageEnum =>
          assessment?.file.language ?? currentLanguage
      );
    }

    if (editor && !loadedFileData) {
      editor.setValue(
        assessment?.file.data
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
