import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../../components/button';

import { Checkbox, appearanceKeys, CheckboxGroup, RadioGroup } from '../../../components/selection-control/src';

const typeKeys = {
  radio: Symbol('radio'),
  checkbox: Symbol('checkbox'),
};

class CheckboxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { values: props.initialValues };
  }

  _onChange = (...args) => {
    action('onChange')(...args);
    const [checked, value] = args;
    this.setState(prevState => ({
      values: prevState.values.map(control => ({
        ...control,
        checked: value === control.value ? checked : control.checked,
      })),
    }));
  };

  render() {
    const { initialValues, ...rest } = this.props;
    const { values } = this.state;

    return (
      <section>
        {values.map((control, index) => (
          <Checkbox key={index} {...rest} {...control} onChange={this._onChange} />
        ))}
      </section>
    );
  }
}

class GroupDemo extends Component {
  constructor(props) {
    super(props);
    this.initialValues = [
      { value: 'apple', label: 'Apple', checked: false },
      { value: 'banana', label: 'Banana', checked: true },
      { value: 'cherries', label: 'Cherries', checked: false, disabled: true },
      { value: 'blueberries', label: 'Blueberries', checked: false },
    ];
    this.state = { values: this.initialValues };
  }

  _onChange = (...args) => {
    action('onChange')(...args);
    const [values] = args;

    const newValues = this.state.values.map(control => ({
      ...control,
      checked: values[control.value],
    }));

    this.setState(prevState => {
      const newValues = prevState.values.map(control => ({
        ...control,
        checked: values[control.value],
      }));
      return { values: newValues };
    });
  };

  _onReset = () => {
    this.setState({ values: this.initialValues });
  };

  render() {
    const { type, ...rest } = this.props;
    const { values } = this.state;
    const Component = type === typeKeys.checkbox ? CheckboxGroup : RadioGroup;

    return (
      <section>
        <Button onClick={this._onReset} title="Reset to default values" />
        <Component {...rest} values={values} onChange={this._onChange} />
      </section>
    );
  }
}

storiesOf('Selection Control', module)
  .add('disabled', () => (
    <section>
      <h3>appearance: 'default'</h3>
      <CheckboxDemo
        initialValues={[
          { value: 'apple', label: 'Apple', checked: false, disabled: true },
          { value: 'banana', label: 'Banana', checked: true, disabled: true },
        ]}
      />
      <h3>appearance: 'button'</h3>
      <CheckboxDemo
        initialValues={[
          { value: 'apple', label: 'Apple', disabled: true },
          { value: 'banana', label: 'Banana', checked: true, disabled: true },
        ]}
        appearance={appearanceKeys.button}
      />
    </section>
  ))
  .add('checkbox', () => (
    <section>
      <h3>appearance: 'default'</h3>
      <CheckboxDemo
        initialValues={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana', checked: true }]}
      />
      <h3>appearance: 'button'</h3>
      <CheckboxDemo
        initialValues={[{ value: 'apple', label: 'Apple' }, { value: 'banana', label: 'Banana', checked: true }]}
        appearance={appearanceKeys.button}
      />
    </section>
  ))
  .add('checkbox group', () => (
    <section>
      <h3>appearance: 'default'</h3>
      <GroupDemo type={typeKeys.checkbox} name="fruits1" />
      <h3>appearance: 'button'</h3>
      <GroupDemo type={typeKeys.checkbox} name="fruits2" appearance={appearanceKeys.button} />
    </section>
  ))
  .add('radio group', () => (
    <section>
      <h3>appearance: 'default'</h3>
      <GroupDemo type={typeKeys.radio} name="fruits1" />
      <h3>appearance: 'button'</h3>
      <GroupDemo type={typeKeys.radio} name="fruits2" appearance={appearanceKeys.button} />
    </section>
  ));
