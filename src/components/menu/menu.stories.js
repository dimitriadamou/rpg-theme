import React from 'react';

import Menu from './menu';
import MenuItem from './menu-item';

const component = {
  title: 'Component/Menu',
  component: Menu,
};

export default component;

const Template = (args) => <Menu width="400px" {...args}>
    <MenuItem>Home</MenuItem>
    <MenuItem>About</MenuItem>
    <MenuItem>Components</MenuItem>
  </Menu>;

export const Primary = Template.bind({});
Primary.args = {
};
