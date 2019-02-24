import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import isNil from 'lodash.isnil';

import { COLORS, Container, Input, Icon, Label } from './styles';
import PhoneInput from './PhoneInput';
import { beforeMaskedValueChange } from './utils';

export const TYPE_KEYS = {
  TEXT: Symbol('text'),
  NUMBER: Symbol('number'),
  EMAIL: Symbol('email'),
  TEL: Symbol('tel'),
  URL: Symbol('url'),
  PRICE: Symbol('price'),
};

export const STATUS_KEYS = {
  SUCCESS: Symbol('success'),
  ERROR: Symbol('error'),
};

const types = {
  [TYPE_KEYS.TEXT]: 'text',
  [TYPE_KEYS.NUMBER]: 'number',
  [TYPE_KEYS.EMAIL]: 'email',
  [TYPE_KEYS.TEL]: 'tel',
  [TYPE_KEYS.URL]: 'url',
  [TYPE_KEYS.PRICE]: 'text',
};

class TextField extends PureComponent {
  state = {
    focused: false,
  };

  _onChange = event => {
    const { value } = event.target;
    const { onChange, name } = this.props;

    onChange(value, name);
  };

  _onFocus = () => {
    const { onFocus, value, name } = this.props;

    if (onFocus) {
      onFocus(value, name);
    }

    this.setState({ focused: true });
  };

  _onBlur = () => {
    const { onBlur, value, name } = this.props;

    if (onBlur) {
      onBlur(value, name);
    }

    this.setState({ focused: false });
  };

  renderInput = () => {
    const { focused } = this.state;
    const { value, type, disabled, label, placeholder, status, name, min, max } = this.props;

    const inputProps = {
      value,
      type: types[type],
      disabled,
      placeholder: label && !focused ? '' : placeholder,
      status,
      name,
      onChange: this._onChange,
      onFocus: this._onFocus,
      onBlur: this._onBlur,
    };

    if (type === TYPE_KEYS.NUMBER) {
      inputProps.pattern = '[0-9]*';
      inputProps.inputmode = 'numeric';
      inputProps.min = min;
      inputProps.max = max;
    }

    if (type === TYPE_KEYS.TEL) {
      inputProps.mask = '+7 (999) 999-99-99';
      inputProps.maskChar = null;

      return <PhoneInput {...inputProps} />;
    }

    if (type === TYPE_KEYS.PRICE) {
      inputProps.beforeMaskedValueChange = beforeMaskedValueChange;
      inputProps.pattern = '[0-9]*';

      inputProps.maskChar = null;
      inputProps.formatChars = { '?': '[0-9]' };
      inputProps.mask = '?'.repeat(16);
      inputProps.right = true;

      return <PhoneInput {...inputProps} />;
    }

    return <Input {...inputProps} />;
  };

  renderLeftIcon = () => {
    const { leftIconName } = this.props;

    if (!leftIconName) {
      return null;
    }

    return <Icon name={leftIconName} fill={COLORS.DEFAULT} left />;
  };

  renderRightIcon = () => {
    const { rightIconName, status } = this.props;

    if (!rightIconName && !status) {
      return null;
    }

    const icon = {};

    switch (status) {
      case STATUS_KEYS.SUCCESS:
        icon.name = 'baseline-check-24px';
        icon.fill = COLORS.SUCCESS;
        break;
      case STATUS_KEYS.ERROR:
        icon.name = 'baseline-warning-24px';
        icon.fill = COLORS.ERROR;
        break;
      default:
        icon.name = rightIconName;
        icon.fill = COLORS.DEFAULT;
        break;
    }

    return <Icon name={icon.name} fill={icon.fill} />;
  };

  render() {
    const { className, label, leftIconName, rightIconName } = this.props;

    return (
      <Container className={className} hasLeftIcon={!isNil(leftIconName)} hasRightIcon={!isNil(rightIconName)}>
        {this.renderInput()}
        {this.renderLeftIcon()}
        {this.renderRightIcon()}
        {!isNil(label) && <Label>{label}</Label>}
      </Container>
    );
  }
}

function valuePropType(props, propName, componentName) {
  const value = props[propName];
  const isString = typeof value === 'string';
  const isNumber = !!Number(value);

  if (props.type === TYPE_KEYS.NUMBER && isString && !isNumber) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}. expected 'string of numbers.'`);
  }
  if (!isString) {
    return new Error(`Invalid prop ${propName} supplied to ${componentName}, expected 'string'.`);
  }
}

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPE_KEYS)),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: valuePropType,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  leftIconName: PropTypes.string,
  rightIconName: PropTypes.string,
  status: PropTypes.oneOf(Object.values(STATUS_KEYS)),
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
};

TextField.defaultProps = {
  type: TYPE_KEYS.TEXT,
  placeholder: '',
  label: '',
  value: '',
};

export default TextField;
