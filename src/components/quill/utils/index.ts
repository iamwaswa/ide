import 'highlight.js/styles/vs2015.css';

import highlight from 'highlight.js';

highlight.configure({
  languages: [
    `java`,
    `c`,
    `cpp`,
    `php`,
    `python`,
    `ruby`,
    `go`,
    `sql`,
    `csharp`,
    `javascript`,
  ],
});

export const formats = [
  `align`,
  `background`,
  `blockquote`,
  `bold`,
  `bullet`,
  `code`,
  `code-block`,
  `color`,
  `direction`,
  `font`,
  `formula`,
  `header`,
  `image`,
  `italic`,
  `indent`,
  `link`,
  `list`,
  `script`,
  `size`,
  `strike`,
  `underline`,
  `video`,
];

export const modules = {
  syntax: {
    highlight: (text: string): string => highlight.highlightAuto(text).value,
  },
  toolbar: [
    [{ indent: `-1` }, { indent: `+1` }],
    [`bold`, `italic`, `underline`, `strike`],
    [{ align: [] }],
    [{ header: 1 }, { header: 2 }],
    [`blockquote`, `code-block`],
    [{ list: `ordered` }, { list: `bullet` }],
    [{ script: `sub` }, { script: `super` }],
    [`link`, `image`, `video`],
    [`clean`],
  ],
};