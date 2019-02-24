const regExpPriceSeparate = new RegExp(`\\d(?=(\\d{${3}})+$)`, 'g');

export const beforeMaskedValueChange = (...props) => {
  const [newState, oldState, userInput] = props;
  if (newState.value.length > 12) {
    return { ...oldState };
  }
  const newValue = newState.value.replace(regExpPriceSeparate, '$& ');
  const del = newValue.length - oldState.value.length;
  let pos = newState.selection.start;
  if (userInput && del < 0 && oldState.selection.length > 0) {
    pos += -2;
  }
  if (del === -2) {
    pos -= pos > 0 ? 1 : 0;
  }
  if (del > 1) {
    pos += 1;
  }

  return { value: newValue, selection: { start: pos, end: pos } };
};
