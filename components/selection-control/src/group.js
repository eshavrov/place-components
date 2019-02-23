import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEqual from 'lodash.isequal';

import Control, { typeKeys, appearanceKeys } from './control';

class Group extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  _onChange = ({ target: { checked, value } }) => {
    const { onChange, values, name, type } = this.props;

    if (!onChange) {
      return;
    }

    if (type === typeKeys.checkbox) {
      const newValues = values.reduce((acc, control) => {
        acc[control.value] = control.value === value ? checked : control.checked;

        return acc;
      }, {});
      onChange(newValues, name);
    } else {
      const newValues = values.reduce((acc, control) => {
        acc[control.value] = control.value === value;

        return acc;
      }, {});
      onChange(newValues, name, value);
    }
  };

  render() {
    const { values, className, onChange, ...rest } = this.props;

    return (
      <div className={className} onChange={this._onChange}>
        {values.map(control => (
          <Control key={control.value} {...rest} {...control} />
        ))}
      </div>
    );
  }
}

Group.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(Object.values(appearanceKeys)),
  type: Control.propTypes.type,
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      ...Control.propTypes,
      checked: PropTypes.bool.isRequired,
    })
  ),
  onChange: PropTypes.func,
};

Group.defaultProps = {
  type: Control.defaultProps.type,
};

export default Group;
