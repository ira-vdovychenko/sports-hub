import React from "react";
import { LongButton } from "./LongButton";

export default {
  title: "Buttons/Long Button",
  component: LongButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: {
      action: "onClick",
      type: { name: "function", required: true },
    },
    children: { control: "text" },
    size: { control: 'text'}, 
    buttonStyle: { control: "object" },
    backgroundColor: { control: "color" },
    active: { control: "boolean" },
    hover: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const Template = (args) => (
  <LongButton
    {...args}
    backgroundColor={
      args.hover
        ? "hover"
        : args.active
          ? "active"
          : args.disabled
            ? "disabled"
            : undefined
    }
  >
    {args.children}
  </LongButton>
);

export const Regular = Template.bind({});
Regular.args = {
  children: "Apply",
  size: '246px',
  backgroundColor: "#D72130",
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: '#FFFFFF'},
  hover: false,
  active: false,
  disabled: false,
};

export const Hover = Template.bind({});
Hover.args = {
  children: "Apply",
  size: '246px',
  hover: true,
  backgroundColor: "#E02232",
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: '#FFFFFF'},
};

export const Active = Template.bind({});
Active.args = {
  children: "Apply",
  size: '246px',
  active: true,
  backgroundColor: "#C80515",
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: '#FFFFFF'},
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Apply",
  size: '246px',
  disabled: true,
  backgroundColor: "#F7D3D6",
  buttonStyle: {fontWeight: 600,  fontFamily: 'Open Sans, sans-serif', fontSize: '12px', color: '#FFFFFF'},
};
