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

const WithMenu = (args) => <Menu width="600px">
    <div style={{padding: "20px 30px 40px 30px", 	display: "flex",
      	alignContent: "center",
      	flexWrap: "nowrap",
      	flexDirection: "column",
      	justifyContent: "center",
      	alignItems: "left",
        gridGap: "20px"}}>
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
        <CharacterIcon character="barret" alt="title" />
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
            name="Barret"
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
            name="Sephiroth"
            level="15"
            maxHP="548"
            currentHP="400"
            maxMP="121"
            currentMP="121"
          />
        </StatsGroup>
      </CharacterCard>
    </div>
  </Menu>;

export const CardWithMenu = WithMenu.bind({});
Primary.args = {
};