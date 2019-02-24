import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TextFielComponent, { TYPE_KEYS, STATUS_KEYS } from '../../../components/text-field/src';

class TextField extends React.Component {
  state = {
    value: this.props.value,
  };

  _onChange = value => {
    action('onChange')(value);
    this.setState({ value });
  };

  render() {
    return (
      <div style={{ maxWidth: 200, padding: 24, backgroundColor: '#fafafa' }}>
        <TextFielComponent {...this.props} onChange={this._onChange} value={this.state.value} />
      </div>
    );
  }
}

storiesOf('Text Field', module)
  .add('default', () => <TextField />)
  .add('disabled', () => <TextField value="Lorem ipsum" leftIconName="baseline-warning-24px" disabled />)
  .add('with placeholder', () => <TextField placeholder="Lorem ipsum" />)
  .add('with label', () => <TextField label="Lorem ipsum" />)
  .add('with placeholder and label', () => <TextField label="Name" placeholder="Ivan Ivanov" />)
  .add('with left/right icons', () => (
    <TextField leftIconName="baseline-phone-24px" rightIconName="baseline-close-24px" />
  ))
  .add('with status error', () => <TextField value="Critical error" status={STATUS_KEYS.ERROR} />)
  .add('with status success', () => <TextField value="Lorem ipsum" status={STATUS_KEYS.SUCCESS} />)
  .add('with number', () => <TextField type={TYPE_KEYS.NUMBER} label="Enter any number" value={10} min={0} max={20} />)
  .add('with phone mask', () => (
    <section>
      <h3>Default</h3>
      <TextField type={TYPE_KEYS.TEL} label="Phone number" />
      <h3>With icon</h3>
      <TextField type={TYPE_KEYS.TEL} label="Phone number" leftIconName="baseline-phone-24px" />
    </section>
  ))
  .add('with currency format', () => <TextField type={TYPE_KEYS.PRICE} label="Cost from, rub" />);
