import React from 'react';
import { LargeButton } from './LargeButton';

export default {
  title: 'Buttons/Large Button',
  component: LargeButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
      type: { name: 'function', required: true }
    },
    children: { control: 'text' }, 
    fontSize: {
      options: ['12px', '14px', '16px'],
      control: { type: 'radio' },
    },
    fontWeight: {
      options: [400, 700, 900],
      control: { type: 'select' } 
    },
    fontFamily: {
      control: { type: 'text' } 
    },
    backgroundColor: { control: 'color' }, 
    active: { control: 'boolean' },
    hover: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <LargeButton 
  {...args}
  backgroundColor={args.hover ? 'hover' : args.active ? 'active' : args.disabled ? 'disabled' : undefined}
  >
  {args.children}
  </LargeButton>;

export const Regular = Template.bind({});
Regular.args = {
  children: 'Click me!',
  backgroundColor: '#D72130',
  hover: false,
  active: false,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  children: 'Hovered!',
  hover: true,
  backgroundColor: '#E02232',
};

export const Active = Template.bind({});
Active.args = {
  children: 'Clicked!',
  active: true,
  backgroundColor: '#C80515',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled!',
  disabled: true,
  backgroundColor: '#F7D3D6',
};

