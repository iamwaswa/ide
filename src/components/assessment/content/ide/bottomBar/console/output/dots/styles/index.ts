import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  [`@keyframes dotAnimation`]: {
    [`0%`]: {
      opacity: 0.2,
    },
    [`20%`]: {
      opacity: 1,
    },
    [`100%`]: {
      opacity: 0.2,
    },
  },
  dot: {
    animationName: `$dotAnimation`,
    animationDuration: `1.4s`,
    animationIterationCount: `infinite`,
    animationFillMode: `both`,
    animationTimingFunction: `ease-in-out`,
  },
  secondDot: {
    animationDelay: `0.2s`,
  },
  thirdDot: {
    animationDelay: `0.4s`,
  },
});
