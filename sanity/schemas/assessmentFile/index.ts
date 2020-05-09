export const assessmentFileSchema = {
  title: `File`,
  name: `assessmentFile`,
  type: `object`,
  fields: [
    {
      title: `Name`,
      name: `name`,
      type: `string`,
    },
    {
      title: `Language`,
      name: `language`,
      type: `string`,
      options: {
        list: [
          {
            title: `Java`,
            value: `java`,
          },
          {
            title: `C++`,
            value: `cpp`,
          },
          {
            title: `PHP`,
            value: `php`,
          },
          {
            title: `Python 3`,
            value: `python3`,
          },
          {
            title: `Ruby`,
            value: `ruby`,
          },
          {
            title: `GO Lang`,
            value: `go`,
          },
          {
            title: `NodeJS`,
            value: `nodejs`,
          },
        ],
      },
    },
    {
      title: `Last Modified`,
      name: `lastModified`,
      type: `customDateTime`,
    },
    {
      title: `Data`,
      name: `data`,
      type: `text`,
    },
  ],
};
