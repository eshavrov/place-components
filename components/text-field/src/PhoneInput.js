import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputMask from 'react-input-mask';
import { Input } from './styles';

class PhoneInput extends Component {
  render() {
    return <InputMask {...this.props}>{inputProps => <Input {...inputProps} type="tel" disableUnderline />}</InputMask>;
  }
}

PhoneInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default PhoneInput;
