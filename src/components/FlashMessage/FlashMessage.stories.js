import React from "react";
import { ReactComponent as ErrorIcon } from "../../assets/flash-error-icon.svg";
import { ReactComponent as SuccessIcon } from "../../assets/successicon.svg";
import { FlashMessage } from "./FlashMessage.jsx";

export default {
  title: "FlashMessage",
  component: FlashMessage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ margin: "20px auto", maxWidth: "600px" }}>
        <div
          style={{ margin: "0", padding: "0", width: "100vw", height: "100vh" }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    title: "FlashMessage Title",
    description: "FlashMessage description",
  },
  argTypes: {
    onClose: {
      action: "onClose",
      type: { name: "function", required: true },
    },
    width: { control: "text" },
    title: { control: "text" },
    titleStyle: { control: "object" },
    description: { control: "text" },
    descriptionStyle: { control: "object" },
  },
};

const Template = (args) => <FlashMessage {...args} />;

export const SuccessFlashMessage = Template.bind({});

SuccessFlashMessage.args = {
  type: "success",
  title: "Updated!",
  titleStyle: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Open Sans, sans-serif",
    color: "black",
  },
  description: "You team is successfully updated.",
  descriptionStyle: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Open Sans, sans-serif",
    color: "black",
  },
};

export const ErrorFlashMessage = Template.bind({});
ErrorFlashMessage.args = {
  type: "error",
  title: "Something went wrong!",
  titleStyle: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Open Sans, sans-serif",
    color: "black",
  },
  description: "Please try again later",
  descriptionStyle: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: "Open Sans, sans-serif",
    color: "black",
  },
};
