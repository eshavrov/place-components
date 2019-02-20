export const BREAKPOINTS = {
  MOBILE: {
    MIN: 0,
    MAX: 767,
  },
  TABLET: {
    MIN: 768,
    MAX: 1023,
  },
  DESKTOP: {
    MIN: 1024,
    MAX: 1439,
  },
  LARGE_DESKTOP: {
    MIN: 1440,
    MAX: 9999,
  },
};

export const cssSize = size => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  return size;
};
