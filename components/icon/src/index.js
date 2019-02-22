import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Icon extends PureComponent {
  render() {
    const { name, size, fill, stroke, className } = this.props;

    return (
      <svg className={className} fill={fill} stroke={stroke} height={size} width={size}>
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  }
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

Icon.defaultProps = {
  fill: '#000000',
  stroke: 'none',
  size: 24,
};

export default Icon;
