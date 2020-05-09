export const assignmentSchema = {
  title: `Assignment`,
  name: `assignment`,
  type: `document`,
  fields: [
    {
      title: `Type`,
      name: `type`,
      type: `string`,
      options: {
        list: [{ title: `Assignment`, value: `ASSIGNMENT` }],
      },
    },
    {
      title: `Assignment details`,
      name: `assignmentDetails`,
      type: `assessmentDetails`,
    },
    {
      title: `Due Date`,
      name: `dueDate`,
      type: `customDateTime`,
    },
  ],
};
