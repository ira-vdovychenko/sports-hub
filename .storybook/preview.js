/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <Router>
      <Story />
    </Router>
  ),
];
