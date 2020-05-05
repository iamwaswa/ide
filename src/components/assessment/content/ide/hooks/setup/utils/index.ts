import { EditorLanguageEnum, LanguageEnum } from '@enums';

export const languageToEditorLanguage = (
  language?: LanguageEnum
): EditorLanguageEnum => {
  switch (language) {
    case undefined: {
      return EditorLanguageEnum.JAVASCRIPT;
    }
    case LanguageEnum.CPP:
    case LanguageEnum.CPP14:
    case LanguageEnum.CPP17: {
      return EditorLanguageEnum.CPP;
    }
    case LanguageEnum.GO: {
      return EditorLanguageEnum.GO;
    }
    case LanguageEnum.JAVA: {
      return EditorLanguageEnum.JAVA;
    }
    case LanguageEnum.NODEJS: {
      return EditorLanguageEnum.JAVASCRIPT;
    }
    case LanguageEnum.PYTHON2:
    case LanguageEnum.PYTHON3: {
      return EditorLanguageEnum.PYTHON;
    }
    case LanguageEnum.PHP: {
      return EditorLanguageEnum.PHP;
    }
    case LanguageEnum.RUBY: {
      return EditorLanguageEnum.RUBY;
    }
    default:
      throw new Error(`Unknown language: ${language}`);
  }
};
