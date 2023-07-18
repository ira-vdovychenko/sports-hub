import React, { useState } from 'react';
import TextInput from './TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
};

const Template = (args) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <TextInput
      value={inputValue}
      onChange={handleInputChange}
      {...args}
    />
  );
};

export const Normal = Template.bind({});
Normal.args = {
  state: 'normal',
};

export const Active = Template.bind({});
Active.args = {
  state: 'active',
};

export const Hover = Template.bind({});
Hover.args = {
  state: 'hover',
};

export const Success = Template.bind({});
Success.args = {
  state: 'success',
};

export const Error = Template.bind({});
Error.args = {
  state: 'error',
};
