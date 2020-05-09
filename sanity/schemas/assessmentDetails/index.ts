export const assessmentDetailsSchema = {
  title: `Assessment Details`,
  name: `assessmentDetails`,
  type: `object`,
  fields: [
    {
      title: `Name`,
      name: `name`,
      type: `string`,
    },
    {
      title: `Script`,
      name: `script`,
      type: `text`,
    },
    {
      title: `File`,
      name: `assessmentFile`,
      type: `assessmentFile`,
    },
    {
      title: `Questions`,
      name: `questions`,
      type: `text`,
    },
    {
      title: `Submissions`,
      name: `submissions`,
      type: `array`,
      of: [
        {
          type: `reference`,
          to: [{ type: `submission` }],
        },
      ],
    },
  ],
};
