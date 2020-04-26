import { Callback, OrNull } from '@types';

import React from 'react';

enum ImageColorEnum {
  BLUE = 'blue',
  RED = 'red',
  GREEN = 'green',
}

interface IUseImages {
  courseImages: OrNull<Array<string>>;
  setNumCourses: Callback<OrNull<number>, void>;
}

export const useImages = (): IUseImages => {
  const extension = React.useRef(`.jpg`);
  const imageEnumKeys = React.useRef(Object.values(ImageColorEnum));
  const [numCourses, setNumCourses] = React.useState<OrNull<number>>(null);
  const [courseImages, setCourseImages] = React.useState<OrNull<Array<string>>>(
    null
  );

  React.useEffect(() => {
    if (numCourses !== null) {
      setCourseImages(
        Array(numCourses)
          .fill(null)
          .map(
            (_, index) =>
              `${imageEnumKeys.current[index % imageEnumKeys.current.length]}${
                extension.current
              }`
          )
      );
    }
  }, [numCourses]);

  return { courseImages, setNumCourses };
};
