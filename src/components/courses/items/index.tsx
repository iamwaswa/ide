import { Fade, Grid, Slide } from '@material-ui/core';

import { BasicCourse } from '@types';
import { Item } from './item';
import React from 'react';
import { useImages } from './hooks/images';

interface IProps {
  data: Array<BasicCourse>;
}

export const Items: React.FC<IProps> = ({ data }) => {
  const { courseImages, setNumCourses } = useImages();

  React.useEffect((): void => {
    setNumCourses(data.length);
  }, [data, setNumCourses]);

  return (
    <Fade
      in={courseImages !== null}
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      <Slide
        in={courseImages !== null}
        timeout={700}
        direction="up"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Grid container spacing={4}>
          {data.map((item, index) => (
            <Grid item key={item.id} xs={12} sm={6} lg={4} xl={4}>
              <Item {...item} image={courseImages?.[index]} />
            </Grid>
          ))}
        </Grid>
      </Slide>
    </Fade>
  );
};
