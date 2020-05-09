export enum RoleEnum {
  INSTRUCTOR = 'INSTRUCTOR',
  STUDENT = 'STUDENT',
}

export enum AssessmentEnum {
  ASSIGNMENT = 'ASSIGNMENT',
  QUIZ = 'QUIZ',
}

export enum DurationUnitEnum {
  HOURS = 'HOURS',
  MINUTES = 'MINUTES',
  SECONDS = 'SECONDS',
}

export enum RoutesEnum {
  COURSES = '/session/:uid/courses',
  COURSE = '/session/:uid/courses/:courseId',
  ASSESSMENT = '/session/:uid/courses/:courseId/:assessmentId',
}

export enum AsideViewEnum {
  SPLIT = 'SPLIT',
  GRADING = 'GRADING',
  QUESTIONS = 'QUESTIONS',
}

export enum EditorThemeEnum {
  DARK = 'vs-dark',
  LIGHT = 'vs',
}

export enum LanguageEnum {
  CPP = 'cpp',
  GO = 'go',
  JAVA = 'java',
  NODEJS = 'nodejs',
  PHP = 'php',
  PYTHON3 = 'python3',
  RUBY = 'ruby',
}

export enum EditorLanguageEnum {
  CPP = 'cpp',
  GO = 'go',
  JAVA = 'java',
  JAVASCRIPT = 'javascript',
  PHP = 'php',
  PYTHON = 'python',
  RUBY = 'ruby',
}

export enum ConsoleTabEnum {
  OUTPUT = 'Output',
  TEST_CASES = 'Test cases',
}
