import { Callback, Editor, OrNull } from '@types';
import { EditorLanguageEnum, EditorThemeEnum, RoleEnum } from '@enums';

import React from 'react';
import { useAuthContext } from '@context/auth/hooks';
import { useIDESetup } from './setup';
import { useSubmission } from './submission';

interface IUseIDE {
  editor: OrNull<Editor>;
  getEditorValue: () => string;
  setEditor: Callback<OrNull<Editor>, void>;
  editorLanguage: EditorLanguageEnum;
  editorTheme: EditorThemeEnum;
  submittedDate: OrNull<string>;
}

export const useIDE = (): IUseIDE => {
  const { role } = useAuthContext();
  const [editor, setEditor] = React.useState<OrNull<Editor>>(null);
  const {
    getEditorValue,
    throttledSendSubmissionAsync,
    submittedDate,
  } = useSubmission({ editor });
  const { editorLanguage, editorTheme } = useIDESetup({ editor });

  React.useEffect(() => {
    editor?.onDidChangeModelContent((): void => {
      if (role === RoleEnum.STUDENT) {
        throttledSendSubmissionAsync();
      }
    });
  }, [editor, role, throttledSendSubmissionAsync]);

  return {
    editor,
    getEditorValue,
    setEditor,
    editorLanguage,
    editorTheme,
    submittedDate,
  };
};
