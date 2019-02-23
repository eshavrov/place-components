import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Ink from 'react-ink';

import { Container, Input, Label, Icon } from './styles';

export const appearanceKeys = {
  default: Symbol('default'),
  button: Symbol('button'),
};

export const typeKeys = {
  radio: Symbol('radio'),
  checkbox: Symbol('checkbox'),
};

const types = {
  [typeKeys.radio]: 'radio',
  [typeKeys.checkbox]: 'checkbox',
};

class Control extends PureComponent {
  _onChange = ({ target: { checked, value } }) => {
    const { onChange, type } = this.props;

    if (!onChange) {
      return;
    }
    if (type === typeKeys.checkbox) {
      onChange(checked, value);
    } else {
      onChange(value);
    }
  };

  render() {
    const { className, appearance, type, name, value, label, disabled, checked } = this.props;
    const asButton = appearance === appearanceKeys.button;

    return (
      <Container className={className}>
        <Input
          type={types[type]}
          name={name}
          value={value}
          disabled={disabled}
          onChange={this._onChange}
          asButton={asButton}
          checked={checked}
        />
        <Label asButton={asButton}>
          <Icon />
          <span>{label}</span>
          {asButton && !disabled && <Ink style={{ color: '#212121' }} opacity={0.87} duration={800} />}
        </Label>
      </Container>
    );
  }
}

Control.propTypes = {
  className: PropTypes.string,
  appearance: PropTypes.oneOf(Object.values(appearanceKeys)),
  type: PropTypes.oneOf(Object.values(typeKeys)),
  name: PropTypes.string,
  value: (props, propName, componentName) => {
    if (props.type === typeKeys.radio && !props[propName]) {
      return new Error(`Invalid prop 'value' for ${componentName}: it is required for 'radio' input.`);
    }
  },
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

Control.defaultProps = {
  className: null,
  appearance: appearanceKeys.default,
  type: typeKeys.radio,
  value: '',
  disabled: false,
  checked: false,
};

export default Control;
