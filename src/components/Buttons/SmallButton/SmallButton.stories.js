import React from 'react';
import { SmallButton } from './SmallButton';

export default {
  title: 'Buttons/Small Button',
  component: SmallButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
      type: { name: 'function', required: true }
    },
     children: { control: 'text' }, 
    size: { control: 'text'}, 
    buttonStyle: { control: "object" },
    backgroundColor: { control: 'color' }, 
    active: { control: 'boolean' },
    hover: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <SmallButton 
        {...args}
        backgroundColor={args.hover ? 'hover' : args.active ? 'active' : args.disabled ? 'disabled' : undefined}
        >
    {args.children}</SmallButton>;


export const Regular = Template.bind({});
Regular.args = {
  children: 'Submit',
  backgroundColor: '#D72130',
  hover: false,
  active: false,
  disabled: false,
  buttonStyle: {fontWeight: 400,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#FFFFFF"},
};

export const Hover = Template.bind({});
Hover.args = {
  children: 'Submit',
  hover: true,
  backgroundColor: '#E02232',
  buttonStyle: {fontWeight: 400,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#FFFFFF"},
};

export const Active = Template.bind({});
Active.args = {
  children: 'Submit',
  active: true,
  backgroundColor: '#C80515',
  buttonStyle: {fontWeight: 400,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#FFFFFF"},
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Submit',
  disabled: true,
  backgroundColor: '#F7D3D6',
  buttonStyle: {fontWeight: 400,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#FFFFFF"},
};
