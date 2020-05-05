export const overrides = {
  MuiCssBaseline: {
    [`@global`]: {
      html: {
        height: `100%`,
      },
      body: {
        height: `100%`,
      },
      img: {
        maxWidth: `100%`,
      },
      [`#___gatsby`]: {
        height: `100%`,
      },
      [`#gatsby-focus-wrapper`]: {
        height: `100%`,
      },
      [`.tl-edges`]: {
        height: `100%`,
      },
      [`.tl-wrapper`]: {
        display: `flex`,
        flexDirection: `column`,
        height: `100%`,
        [`& > div`]: {
          height: `100%`,
          display: `flex`,
          flexDirection: `column`,
        },
      },
    },
  },
  MUIDataTableToolbar: {
    left: {
      minHeight: 67.42,
      paddingBlockStart: `20px !important`,
    },
    actions: {
      alignSelf: `flex-end`,
      flexGrow: 0,
    },
  },
  MUIDataTableSearch: {
    searchIcon: {
      display: `none`,
    },
    searchText: {
      flexGrow: 1,
    },
    clearIcon: {
      display: `none`,
    },
  },
  MUIDataTableHeadCell: {
    sortAction: {
      position: `relative`,
      top: 8,
      width: 26,
    },
  },
  MUIDataTableBodyRow: {
    root: {
      cursor: `pointer`,
    },
  },
};
