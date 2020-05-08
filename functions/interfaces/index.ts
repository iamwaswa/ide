export interface ITestCaseInput {
  name: string;
  value: string;
}

export interface ITestCase {
  inputs: Array<ITestCaseInput>;
  output: string;
}
