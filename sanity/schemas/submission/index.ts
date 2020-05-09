export const submissionSchema = {
  title: `Submission`,
  name: `submission`,
  type: `document`,
  fields: [
    {
      title: `Student`,
      name: `student`,
      type: `reference`,
      to: [{ type: `user` }],
    },
    {
      title: `Feedback`,
      name: `feedback`,
      type: `object`,
      fields: [
        {
          title: `Comments`,
          name: `comments`,
          type: `text`,
        },
        {
          title: `File`,
          name: `file`,
          type: `file`,
        },
      ],
    },
    {
      title: `File`,
      name: `file`,
      type: `file`,
    },
    {
      title: `Grade`,
      name: `grade`,
      type: `object`,
      fields: [
        {
          title: `Score`,
          name: `score`,
          type: `number`,
        },
        {
          title: `Total`,
          name: `total`,
          type: `number`,
        },
      ],
    },
    {
      title: `Test Cases`,
      name: `testCases`,
      type: `array`,
      of: [
        {
          title: `Test Case`,
          name: `testCase`,
          type: `object`,
          fields: [
            {
              title: `Inputs`,
              name: `inputs`,
              type: `array`,
              of: [
                {
                  title: `Input`,
                  name: `input`,
                  type: `object`,
                  fields: [
                    {
                      title: `Name`,
                      name: `name`,
                      type: `string`,
                    },
                    {
                      title: `Value`,
                      name: `value`,
                      type: `string`,
                    },
                  ],
                },
              ],
            },
            {
              title: `Output`,
              name: `Output`,
              type: `string`,
            },
          ],
        },
      ],
    },
  ],
};
