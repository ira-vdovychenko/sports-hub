import React from "react";
import { Input } from "./Input.jsx";

export default {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs"],
    argTypes: {
        onChange: { action: "onChange", type: { name: "function", required: true } },
        onBlur: { action: "onBlur", type: { name: "function", required: true } },
        placeholder: { control: "text" },
        inputStyle: { control: "object" },
        value: { control: "text" },
        width: { control: "text" },
        height: { control: "text" },
        style: { control: "object" },
        hover: { control: "boolean" },
        active: { control: "boolean" }, 
      },
  };
  
  const Template = (args) => (
    <Input
      {...args}
      border={
        args.hover
          ? "hover"
          : args.active
            ? "active"
              : undefined
      }
    >
      {args.value}
    </Input>
  );
  
  export const Regular = Template.bind({});
  Regular.args = {
    placeholder: "Enter Your Name",
    inputStyle: { fontSize: 12, fontWeight: 600, fontFamily: "Open Sans, sans-serif" },
    width: '350px',
    height: '36px',
    hover: false,
    active: false,
  };
  
  export const Hover = Template.bind({});
  Hover.args = {
    placeholder: "Enter Your Name",
    inputStyle: { fontSize: 12, fontWeight: 600, fontFamily: "Open Sans, sans-serif" },
    width: '350px',
    height: '36px',
    hover: true,
  };
  
  export const Active = Template.bind({});
  Active.args = {
    placeholder: "Enter Your Name",
    inputStyle: { fontSize: 12, fontWeight: 600, fontFamily: "Open Sans, sans-serif" },
    width: '350px',
    height: '36px',
    active: true,
  };
  
  