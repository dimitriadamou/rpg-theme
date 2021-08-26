import React from 'react';

import { BarsGroup, CharacterCard, CharacterIcon, StatsGroup, Stats } from './index';
import Menu from '../menu/menu';


const component = {
  title: 'ff7/Character Card',
  component: CharacterCard,
};

export default component;

const Template = (args) => <CharacterCard />;

export const Primary = Template.bind({});
Primary.args = {
};


const WithMenu = (args) => <Menu width="600px" height="600px">
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
  </Menu>;

export const CardWithMenu = WithMenu.bind({});
Primary.args = {
};