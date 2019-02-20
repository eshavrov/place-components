import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Picture, StyledImg } from './styles';
import { createSource, createMedia } from './utils';

export const TYPE_KEYS = {
  CONTAIN: Symbol('CONTAIN'),
};

const DIMENSIONS_DEFAULT = [
  {
    maxWidth: 500,
    width: 500,
  },
  {
    maxWidth: 767,
    width: 767,
  },
  {
    maxWidth: 1023,
    height: 500,
  },
];

class Image extends PureComponent {
  renderImg() {
    const { src, altDescription, dimensions } = this.props;

    return (
      <Picture>
        {dimensions.map(({ width, height, ...rest }, index) => (
          <Fragment key={`picture-${index}`}>
            <source
              key={`picture_source_webP-${index}`}
              srcSet={`${createSource(src, width, height, 'webp')}`}
              media={createMedia({ ...rest })}
            />
            <source
              key={`picture_source_normal-${index}`}
              srcSet={`${createSource(src, width, height)}`}
              media={createMedia({ ...rest })}
            />
          </Fragment>
        ))}
        <StyledImg src={`${src}`} alt={altDescription} />
      </Picture>
    );
  }

  render() {
    const { width, height, className, type } = this.props;

    switch (type) {
      case TYPE_KEYS.CONTAIN:
        return this.renderImg();
      default:
        return (
          <Container className={className} width={width} height={height}>
            {this.renderImg()}
          </Container>
        );
    }
  }
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  altDescription: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPE_KEYS)),
  dimensions: PropTypes.arrayOf(
    PropTypes.shape({
      maxWidth: PropTypes.number,
      width: PropTypes.number,
    })
  ),
};

Image.defaultProps = {
  dimensions: DIMENSIONS_DEFAULT,
};

export default Image;
