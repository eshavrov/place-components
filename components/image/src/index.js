import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { StyledImage } from './styles';

class Image extends PureComponent {
  render() {
    const { src, width, height } = this.props;

    return <StyledImage src={src} width={width} height={height} />;
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};

export default Image;
