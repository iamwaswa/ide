import 'highlight.js/styles/vs2015.css';

import highlight from 'highlight.js';

highlight.configure({
  languages: [`java`, `cpp`, `php`, `python`, `ruby`, `go`, `javascript`],
});

export const formats = [
  `align`,
  `blockquote`,
  `bold`,
  `bullet`,
  `code`,
  `code-block`,
  `direction`,
  `header`,
  `italic`,
  `indent`,
  `list`,
  `script`,
  `strike`,
  `underline`,
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
  ],
};
