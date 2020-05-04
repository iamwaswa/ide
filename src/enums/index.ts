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
  DARK = 'dark',
  LIGHT = 'light',
}

export enum EditorLanguageEnum {
  C = 'c',
  CPP = 'cpp',
  CPP14 = 'cpp14',
  CPP17 = 'cpp17',
  GO = 'go',
  JAVA = 'java',
  NODEJS = 'javascript',
  PHP = 'php',
  PYTHON3 = 'python',
  PYTHON2 = 'python',
  RUBY = 'ruby',
}

export enum ConsoleTabEnum {
  OUTPUT,
  TEST_CASES,
}
