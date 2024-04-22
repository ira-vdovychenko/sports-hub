import React from 'react';
import { SmallTextButton } from './SmallTextButton';

export default {
  title: 'Buttons/Small Text Button',
  component: SmallTextButton,
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
    isCreateItemButton: { control: 'boolean' },
  },
};

const Template = (args) => (
    <SmallTextButton
      {...args}
      color={args.hover ? 'hover' : args.active ? 'active' : args.disabled ? 'disabled' : undefined}
    >
      {args.children}
    </SmallTextButton>
  );
  

export const Regular = Template.bind({});
Regular.args = {
  children: 'Sign up',
  hover: false,
  active: false,
  disabled: false,
  backgroundColor: '#FFFFFF',
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#d72130"},
};

export const Hover = Template.bind({});
Hover.args = {
  children: 'Sign up',
  hover: true,
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#e02232"},
};

export const Active = Template.bind({});
Active.args = {
  children: 'Sign up',
  active: true,
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#c80515"},
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Sign up',
  disabled: true,
  fontWeight: 600,
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: "#f7d3d6"},
};

export const CreateItemButton = Template.bind({});
CreateItemButton.args = {
  children: 'Create Item!',
  isCreateItemButton: true, 
};