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

const MultipleBoxes = (args) => <>
  <div style={{position: 'absolute', width: "500px", height: "600px", "left": "180px"}}>
    <Menu height={"600px"}>

    </Menu>
  </div>
  <div style={{position: 'absolute', width: "200px", height: "400px", top: "50px"}}>
    <Menu {...args}>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Components</MenuItem>
    </Menu>
  </div>
</>


export const Multiple = MultipleBoxes.bind({});
Multiple.args = {
};