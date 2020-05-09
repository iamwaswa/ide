export const courseSchema = {
  title: `Course`,
  name: `course`,
  type: `document`,
  fields: [
    {
      title: `Title`,
      name: `title`,
      type: `string`,
    },
    {
      title: `Subtitle`,
      name: `subtitle`,
      type: `string`,
    },
    {
      title: `Overview`,
      name: `overview`,
      type: `object`,
      fields: [
        {
          title: `Syllabus`,
          name: `syllabus`,
          type: `text`,
        },
        {
          title: `Course Details`,
          name: `courseDetails`,
          type: `text`,
        },
        {
          title: `Teaching assistants`,
          name: `teachingAssistants`,
          type: `array`,
          of: [
            {
              type: `reference`,
              to: [{ type: `user` }],
            },
          ],
        },
        {
          title: `Instructor`,
          name: `instructor`,
          type: `reference`,
          to: [{ type: `user` }],
        },
      ],
    },
    {
      title: `Assignments`,
      name: `assignments`,
      type: `array`,
      of: [
        {
          type: `reference`,
          to: [{ type: `assignment` }],
        },
      ],
    },
    {
      title: `Quizzes`,
      name: `quizzes`,
      type: `array`,
      of: [
        {
          type: `reference`,
          to: [{ type: `quiz` }],
        },
      ],
    },
    {
      title: `Students`,
      name: `students`,
      type: `array`,
      of: [
        {
          type: `reference`,
          to: [{ type: `user` }],
        },
      ],
    },
  ],
};
