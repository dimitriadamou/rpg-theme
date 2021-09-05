// .storybook/preview.js
import './storybook.css';

import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import ff7Theme from '../src/theme/ff7';

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [ff7Theme]));

export const decorators = [
  (Story) => (
    <>
      <ff7Theme.GlobalStyle />
      <Story />
    </>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "grey",
    values: [
      {
        name: "grey",
        value: "#aaaaaa"
      },
      {
        name: "white",
        value: "#ffffff"
      },
      {
        name: "black",
        value: "#000000"
      }
    ]
  }
}