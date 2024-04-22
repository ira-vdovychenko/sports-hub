import React from 'react';
import { SecondarySmallButton } from './SecondarySmallButton';


export default {
  title: 'Buttons/Secondary Small Button',
  component: SecondarySmallButton,
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

const Template = (args) => (
    <SecondarySmallButton
      {...args}
      backgroundColor={args.hover ? 'hover' : args.active ? 'active' : args.disabled ? 'disabled' : undefined}
      color={args.hover ? 'hover' : args.active ? 'active' : args.disabled ? 'disabled' : undefined}
    >
      {args.children}
    </SecondarySmallButton>
  );
  

export const Regular = Template.bind({});
Regular.args = {
  children: 'Vote to see results',
  size: '137px',
  hover: false,
  active: false,
  disabled: false,
  backgroundColor: '#FFFFFF',
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px'},
};

export const Hover = Template.bind({});
Hover.args = {
  children: 'Vote to see results',
  size: '137px',
  hover: true,
  backgroundColor: '#E02232',
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px'},
};

export const Active = Template.bind({});
Active.args = {
  children: 'Vote to see results',
  size: '137px',
  active: true,
  backgroundColor: '#C80515',
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px'},
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Vote to see results',
  size: '137px',
  disabled: true,
  backgroundColor: '#FFFFFF',
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px'},
};
