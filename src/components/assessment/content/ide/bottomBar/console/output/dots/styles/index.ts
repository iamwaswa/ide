import { Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
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
    color: theme.palette.grey[700],
  },
  secondDot: {
    animationDelay: `0.2s`,
  },
  thirdDot: {
    animationDelay: `0.4s`,
  },
}));
