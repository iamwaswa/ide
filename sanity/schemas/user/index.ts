export const userSchema = {
  title: `User`,
  name: `user`,
  type: `document`,
  fields: [
    {
      title: `Display Name`,
      name: `displayName`,
      type: `string`,
    },
    {
      title: `Email`,
      name: `email`,
      type: `string`,
    },
    {
      title: `Courses`,
      name: `courses`,
      type: `array`,
      of: [{ type: `reference`, to: [{ type: `course` }] }],
    },
  ],
};
