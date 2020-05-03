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
