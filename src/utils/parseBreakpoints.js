export const parseBreakpoints = theme => {
  return Object.keys(theme.breakpoints).forEach(key => {
    const keys = Object.keys(theme.breakpoints);
    const index = keys.indexOf(key);
    let max = null;

    if (index !== keys.length - 1) {
      max = Object.values(theme.breakpoints)[index + 1] - 1;
    }

    theme.breakpoints[key] = {
      min: theme.breakpoints[key],
      max: max
    };
  });
};
