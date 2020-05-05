import { AssessmentEnum, ConsoleTabEnum, LanguageEnum } from '@enums';

import monacoEditor from 'monaco-editor';

export type Callback<T, U> = (args: T) => U;

export type OrNull<T> = T | null;

export type OrUndefined<T> = T | undefined;

export type BasicCourse = {
  id: string;
  title: string;
  subTitle: string;
};

export type CourseOverview = {
  instructor: User;
  teachingAssistants: Array<User>;
  syllabus: string;
  courseDetails: string;
};

export type Grade = {
  score: number;
  total: number;
};

export type AssessmentFile = {
  name: string;
  language: LanguageEnum;
  lastModified: Date;
  versionIndex: number;
  data: string;
};

export type TestCaseInput = {
  name: string;
  value: string;
};

export type TestCase = {
  id: string;
  inputs: Array<TestCaseInput>;
  output: string;
};

export type User = {
  id: string;
  email: string;
  displayName: string;
};

export type Feedback =
  | {
      comments: string;
      file?: AssessmentFile;
    }
  | {
      file: AssessmentFile;
      comments?: string;
    }
  | {
      file: AssessmentFile;
      comments: string;
    };

export type Submission = {
  id: string;
  student: User;
  feedback?: Feedback;
  file?: AssessmentFile;
  grade?: Grade;
  testCases?: Array<TestCase>;
};

export type Assessment = {
  id: string;
  name: string;
  testCaseSchema: TestCase;
  type: AssessmentEnum;
  script: string;
  file: AssessmentFile;
  questions: Array<string>;
  submissions?: Array<Submission>;
};

export type Assignment = Assessment & {
  dueDate: Date;
};

export type Quiz = Assessment & {
  durationInSeconds: number;
  startDate: Date;
};

export type CompleteCourse = BasicCourse & {
  overview: CourseOverview;
  assignments: Array<Assignment>;
  quizzes: Array<Quiz>;
  students: Array<User>;
};

export type CourseNavigationDrawerSection =
  | `overview`
  | `assignments`
  | `quizzes`;

export type EmailData = {
  recipients: Array<User>;
  subject: string;
  message: string;
};

export type UseUpdateTestCase = [
  boolean,
  string | undefined,
  (testCase: TestCase) => void
];

export type ConsoleTab = { title: ConsoleTabEnum; component: JSX.Element };

export type Editor = monacoEditor.editor.IStandaloneCodeEditor;
