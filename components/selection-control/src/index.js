import React from 'react';
import omit from 'lodash.omit';

import Group from './group';
import Control, { typeKeys, appearanceKeys } from './control';

const Checkbox = props => <Control {...props} type={typeKeys.checkbox} />;
const Radio = props => <Control {...props} type={typeKeys.radio} />;

const RadioGroup = props => <Group {...props} type={typeKeys.radio} />;
const CheckboxGroup = props => <Group {...props} type={typeKeys.checkbox} />;

const controlProps = omit(Control.propTypes, 'type');
const groupProps = omit(Group.propTypes, 'type');

Checkbox.propTypes = controlProps;
Radio.propTypes = controlProps;
RadioGroup.propTypes = groupProps;
CheckboxGroup.propTypes = groupProps;

export { CheckboxGroup, RadioGroup, Checkbox, Radio, appearanceKeys };
