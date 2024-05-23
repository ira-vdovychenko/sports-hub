import React from "react";
import { Popup } from "./Popup.jsx";
import { ReactComponent as DeleteIcon } from "../../assets/popupdelete.svg";

export default {
  title: "Components/Popup",
  component: Popup,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "60%", height: "100vh" }}>
        <div style={{ width: "60%" }}>
          <Story />
        </div>
      </div>
    ),
  ],
  args: {
    title: "Popup Title",
    description: "Popup description",
    submitButton: "Submit",
    cancelButton: "Cancel",
  },
  argTypes: {
    title: { control: "text" },
    titleStyle: { control: "object" },
    description: { control: "text" },
    descriptionStyle: { control: "object" },
    height: { control: "text" },
    submitButton: { control: "text" },
    cancelButton: { control: "text" },
  },
};

const Template = (args) => <Popup {...args} />;

export const WarningPopup = Template.bind({});
WarningPopup.args = {
  icon: <DeleteIcon />,
  title: "You are about to delete this item",
  titleStyle: { fontSize: 14, fontWeight: 700, paddingTop: 86, fontFamily: "Open Sans, sans-serif", color: "black" },
  description: "Are you sure?",
  descriptionStyle: { fontSize: 14, fontWeight: 400, fontFamily: "Open Sans, sans-serif", color: "black" },
  height: "247px",
  showButtons: true,
  submitButton: "Delete",
  cancelButton: "Cancel",
};

export const CreatePopup = Template.bind({});
CreatePopup.args = {
  title: "Add new category",
  titleStyle: { fontSize: 24, fontWeight: 700, paddingTop: 36, fontFamily: "Open Sans, sans-serif", color: "black" },
  description: '',
  height: "260px",
  showForm: true,
  showInput: true,
  type: "text",
  label: "name",
  inputPlaceholder: "Name your menu item",
  showButtons: true,
  submitButton: "Add",
  cancelButton: "Cancel",
};
