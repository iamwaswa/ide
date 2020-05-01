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
    [{ font: [] }],
    [{ size: [`small`, false, `large`, `huge`] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ align: [] }],
    [`bold`, `italic`, `underline`, `strike`],
    [`blockquote`, `code-block`],
    [{ list: `ordered` }, { list: `bullet` }],
    [{ script: `sub` }, { script: `super` }],
    [{ indent: `-1` }, { indent: `+1` }],
    [{ direction: `rtl` }],
    [{ color: [] }],
    [{ background: [] }],
    [`link`, `image`, `video`],
    [`clean`],
  ],
};
