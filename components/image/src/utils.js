export const cssSize = size => {
  if (typeof size === 'number') {
    return `${size}px`;
  }

  return size;
};
