import { Assignment, Quiz, Submission } from '@types';
import { Box, Fade } from '@material-ui/core';

import MUIDataTable from 'mui-datatables';
import React from 'react';
import { useNavigateToGrading } from './hooks';
import { useStyles } from './styles';

interface IProps {
  assessment: Assignment | Quiz;
  show: boolean;
  submissions?: Array<Submission>;
}

export const Submissions: React.FC<IProps> = ({
  assessment,
  show,
  submissions,
}) => {
  const classes = useStyles();
  const navigateToGrading = useNavigateToGrading({ assessment });

  return (
    <Fade in={show} timeout={500} mountOnEnter={true} unmountOnExit={true}>
      <Box component="tr" className={classes.tr}>
        <td className={classes.td} colSpan={100}>
          <MUIDataTable
            columns={[`Name`, `Email`, `Score`, `Total`]}
            data={
              submissions?.map(
                (submission: Submission): Array<string> => [
                  submission.student.displayName,
                  submission.student.email,
                  submission.grade?.score.toString() ?? `-`,
                  submission.grade?.total.toString() ?? `-`,
                ]
              ) ?? []
            }
            options={{
              download: false,
              filter: true,
              print: false,
              sort: true,
              responsive: `scrollMaxHeight`,
              rowsPerPage: 5,
              rowsPerPageOptions: [5, 10, 15, 25, 50, 100],
              selectableRows: `none`,
              onRowClick: (_, { dataIndex }) =>
                navigateToGrading(submissions?.[dataIndex]),
            }}
            title={null}
          />
        </td>
      </Box>
    </Fade>
  );
};
