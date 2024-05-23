import React from "react";
import { Provider } from "react-redux";
import { Profile } from "./Profile";
import reduxMockStore from "../../redux/mockStore";
import { createStore } from "redux";
/* import { userEvent, within, step, waitFor, expect } from "@storybook/test"; */

const createMockStore = (initialState) => {
  return createStore((state) => state, initialState);
};

export default {
  title: "Components/Profile",
  component: Profile,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => {
      const initialState = {
        auth: {
          user: null,
          token: "",
          role: null,
          isAdmin: null,
        },
      };
      const newState = {
        ...reduxMockStore.getState(),
        auth: initialState.auth,
      };

      return (
        <Provider store={reduxMockStore}>
          <div style={{ marginLeft: '60px', marginTop: '20px' }}> 
            <Story />
          </div>
        </Provider>
      );
    },
  ],
};
 /* const userProfileDetail = async (context) => {
  const { canvasElement, step } = context;

  const canvas = within(canvasElement);

  await step("Open profile menu", async () => {
    await userEvent.click(canvas.getByLabelText("Open profile menu"));
  });
  await step("Log out", async () => {
    await userEvent.click(canvas.getByText("Log out"));
  });
  await waitFor(() => {
    const userProfileContainer = canvas.getByTestId("profile-container");
    expect(userProfileContainer).toBeInTheDocument();
    const signUpButton = canvas.getByLabelText("sign-up");
    expect(signUpButton).toBeInTheDocument();
    const loginButton = canvas.getByLabelText("log-in");
    expect(loginButton).toBeInTheDocument();
  });

};  */

export const UnauthenticatedUser = (args) => <Profile {...args} />;

export const AuthenticatedUser = (args) => {
  const initialState = {
    auth: {
      user: {
        UserName: "Ivan Baloh",
        Email: "john@example.com",
      },
      token: "someToken",
      role: null,
      isAdmin: null,
    },
  };

  const newState = { ...reduxMockStore.getState(), auth: initialState.auth };

  return (
    <Provider store={createMockStore(newState)}>
      <Profile {...args} />
    </Provider>
  );
};
/* AuthenticatedUser.play = userProfileDetail;
 */
export const AuthenticatedAdmin = (args) => {
  const initialState = {
    auth: {
      user: {
        UserName: "Brandon Miles",
        Email: "admin@example.com",
      },
      token: "someToken",
      role: null,
      isAdmin: true,
    },
  };

  const newState = { ...reduxMockStore.getState(), auth: initialState.auth };

  return (
    <Provider store={createMockStore(newState)}>
      <Profile {...args} />
    </Provider>
  );
};

/* const logoutPlay = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

   // Знайти елемент, який викликає меню і натиснути на нього
   const menuTrigger = await canvas.getByLabelText('Open profile menu'); // Припустимо, це мітка елемента, який викликає меню
   await userEvent.click(menuTrigger);

  const logoutLink = await canvas.getByText('Log out');

  await userEvent.click(logoutLink);
};


UnauthenticatedUser.play = logoutPlay;
AuthenticatedUser.play = logoutPlay;
AuthenticatedAdmin.play = logoutPlay; */
