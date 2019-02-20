export function createSizedUrl(src, width, height, format) {
  let tmp = src;
  const params = [];

  if (format) {
    params.push(`f=${format}`);
  }
  if (width) {
    params.push(`w=${width}`);
  }
  if (height) {
    params.push(`h=${height}`);
  }

  if (params.length > 0) {
    tmp += `?${params.join('&')}`;
  }

  return tmp;
}

export function generateSourcePiece(url, pixelDensity) {
  let sourcePiece = url;
  if (pixelDensity !== 1) {
    sourcePiece += ` ${pixelDensity}x`;
  }

  return sourcePiece;
}

export function combineSourcesToSet(sources) {
  return sources.join(', ');
}

export function createSource(src, width, height, format, count = 3) {
  let length = count;
  if (!width && !height) {
    length = 1;
  }

  return combineSourcesToSet(
    Array.from({ length }, (_, i) => generateSourcePiece(createSizedUrl(src, width && width * (i + 1), height && height * (i + 1), format), i + 1))
  );
}

export function createMedia({ maxWidth, maxHeight }) {
  if (maxWidth) {
    return `(max-width: ${maxWidth}px)`;
  }
  if (maxHeight) {
    return `(max-height: ${maxHeight}px)`;
  }
}
