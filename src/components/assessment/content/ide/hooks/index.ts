import { OrNull } from '@types';
import React from 'react';
import { RoleEnum } from '@enums';
import { useAuthContext } from '@context/auth/hooks';
import { useIDESetup } from './setup';
import { useSubmission } from './submission';

export const useIDE = () => {
  const { role } = useAuthContext();
  const [editor, setEditor] = React.useState<OrNull<any>>(null);
  const {
    getEditorValue,
    throttledSendSubmissionAsync,
    submittedDate,
  } = useSubmission({ editor });
  const { editorLanguage, editorTheme } = useIDESetup({ editor });

  React.useEffect(() => {
    editor?.onDidChangeModelContent(() => {
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
