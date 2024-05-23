import React from "react";
import { Provider } from "react-redux";
import { AccountSwitcher } from "./AccountSwitcher";
import reduxMockStore from "../../redux/mockStore";
import { createStore } from "redux";

const createMockStore = (initialState) => {
    return createStore((state) => state, initialState);
  };
  
  export default {
    title: "Components/AccountSwitcher",
    component: AccountSwitcher,
    parameters: {
      layout: "fullscreen",
    },
    decorators: [
      (Story) => {
        const initialState = {
          auth: {
            isAdmin: null,
          },
        };
  
        return (
          <Provider store={createMockStore(initialState)}>
            <div style={{ marginLeft: '60px', marginTop: '20px' }}> 
              <Story />
            </div>
          </Provider>
        );
      },
    ],
  };

  export const UserAccount = (args) => <AccountSwitcher {...args} />;

  export const AdminAccount = (args) => {
    const initialState = {
      auth: {
        isAdmin: true,
      },
    };
  
    const newState = { ...reduxMockStore.getState(), auth: initialState.auth };
  
    return (
      <Provider store={createMockStore(newState)}>
        <AccountSwitcher {...args} />
      </Provider>
    );
  };
  