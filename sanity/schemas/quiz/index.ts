export const quizSchema = {
  title: `Quiz`,
  name: `quiz`,
  type: `document`,
  fields: [
    {
      title: `Type`,
      name: `type`,
      type: `string`,
      options: {
        list: [{ title: `Quiz`, value: `QUIZ` }],
      },
    },
    {
      title: `Quiz details`,
      name: `quizDetails`,
      type: `assessmentDetails`,
    },
    {
      title: `Start Date`,
      name: `startDate`,
      type: `customDateTime`,
    },
    {
      title: `Duration`,
      name: `duration`,
      type: `object`,
      fields: [
        {
          title: `Length`,
          name: `length`,
          type: `number`,
        },
        {
          title: `Unit`,
          name: `unit`,
          type: `string`,
          options: {
            list: [
              { title: `Hours`, value: `HOURS` },
              { title: `Minutes`, value: `MINUTES` },
              { title: `Seconds`, value: `SECONDS` },
            ],
          },
        },
      ],
    },
  ],
};
