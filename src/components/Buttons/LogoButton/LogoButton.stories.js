import React from 'react';
import { LogoButton } from './LogoButton';

export default {
  title: 'Buttons/Logo Button',
  component: LogoButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'onClick',
      type: { name: 'function', required: true }
    },
     children: { control: 'text' }, 
     buttonStyle: { control: "object" },
     backgroundColor: { control: 'color' }, 
    
  },
};

const Template = (args) => <LogoButton {...args} >{args.children}</LogoButton>;

export const Regular = Template.bind({});
Regular.args = {
  children: 'Sports Hub',
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '22px', color: '#FFFBFB'},
  backgroundColor: '#D72130',
};

