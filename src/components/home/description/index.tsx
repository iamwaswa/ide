import { Box, Typography } from '@material-ui/core';

import React from 'react';

interface IProps {
  container: string;
  secondaryContent: string;
}

export const Description: React.FC<IProps> = ({
  container,
  secondaryContent,
}) => {
  return (
    <Box className={container}>
      <Box className={secondaryContent}>
        <Box className="secondaryContent__container">
          <Typography className="secondaryContent__mainTitle" variant="h5">
            Title goes here
          </Typography>
          <Typography className="secondaryContent__text" variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic,
            culpa cumque, fugit, vel sed eaque molestiae neque error reiciendis
            architecto voluptatibus quo ad veritatis officia. Facilis velit
            laborum quas harum corrupti aut error quis fugit, in, quidem
            deserunt deleniti, porro repellendus eaque dolor ipsum aperiam
            magnam quod molestias sint.
          </Typography>
        </Box>
        <Box className="secondaryContent__container">
          <Typography className="secondaryContent__mainTitle" variant="h5">
            Title goes here
          </Typography>
          <Typography className="secondaryContent__text" variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic,
            culpa cumque, fugit, vel sed eaque molestiae neque error reiciendis
            architecto voluptatibus quo ad veritatis officia. Facilis velit
            laborum quas harum corrupti aut error quis fugit, in, quidem
            deserunt deleniti, porro repellendus eaque dolor ipsum aperiam
            magnam quod molestias sint.
          </Typography>
        </Box>
        <Box className="secondaryContent__container">
          <Typography className="secondaryContent__mainTitle" variant="h5">
            Title goes here
          </Typography>
          <Typography className="secondaryContent__text" variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil hic,
            culpa cumque, fugit, vel sed eaque molestiae neque error reiciendis
            architecto voluptatibus quo ad veritatis officia. Facilis velit
            laborum quas harum corrupti aut error quis fugit, in, quidem
            deserunt deleniti, porro repellendus eaque dolor ipsum aperiam
            magnam quod molestias sint.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
