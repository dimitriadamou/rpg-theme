import React from 'react';

import Menu from './menu';
import MenuItem from './menu-item';

import { BarsGroup, CharacterCard, CharacterIcon, StatsGroup, Stats } from '../character-card';

const component = {
  title: 'ff7/Menu',
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
  <div style={{position: 'absolute', width: "500px", top: "50px", height: "600px", "left": "0px"}}>
    <Menu height={"600px"}>
      <CharacterCard>
        <CharacterIcon character="cloud" alt="title" />
        <BarsGroup>
          <div>
            bar a
          </div>
          <div>
            bar a
          </div>
        </BarsGroup>
        <StatsGroup> 
          <Stats 
            name="Cloud"
            level="15"
            maxHP="548"
            currentHP="400"
            maxMP="121"
            currentMP="121"
          />
        </StatsGroup>
      </CharacterCard>
      <CharacterCard>
        <CharacterIcon character="sephiroth" alt="title" />
      </CharacterCard>
      <CharacterCard>
      <CharacterIcon character="barret" alt="title" />
      </CharacterCard>
    </Menu>
  </div>
  <div style={{position: 'absolute', width: "160px", top: "20px", left: "480px"}}>
    <Menu {...args}>
      <MenuItem>Item</MenuItem>
      <MenuItem>Magic</MenuItem>
      <MenuItem>Materia</MenuItem>
      <MenuItem>Equip</MenuItem>
      <MenuItem>Order</MenuItem>
      <MenuItem>Limit</MenuItem>
      <MenuItem>Config</MenuItem>
      <br />
      <MenuItem>Save</MenuItem>
      <MenuItem>Quit</MenuItem>
    </Menu>
  </div>
</>


export const Multiple = MultipleBoxes.bind({});
Multiple.args = {
};