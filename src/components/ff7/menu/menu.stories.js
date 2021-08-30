import React from 'react';

import { Menu, NavigationMenu, MenuItem, CharacterMenu} from './index';
import { BarsGroup, CharacterCard, CharacterIcon, StatsGroup, Stats } from '../character-card';

import Grid from '../layout/grid';
import Typography from '../typography/typography';

const component = {
  title: 'ff7/Menu',
  component: NavigationMenu,
};

export default component;

const characters = [
  {
    icon: "cloud",
    name: "Cloud",
    level: "15",
    maxHP: "500",
    currentHP: "500",
    maxMP: "100",
    currentMP: "100"
  },
  {
    icon: "barret",
    name: "Barret",
    row: "back",
    level: "15",
    maxHP: "500",
    currentHP: "400",
    maxMP: "100",
    currentMP: "50"
  },
  {
    icon: "tifa",
    name: "Tifa",
    level: "15",
    maxHP: "500",
    currentHP: "300",
    maxMP: "100",
    currentMP: "25"
  }
]

const MultipleBoxes = (args) => <>
  <div style={{
    position: 'absolute', 
    width: "500px", top: "50px", 
    "left": "0px",
}}>
    <CharacterMenu>
        {characters.map(
          (character) => <CharacterCard key={character.name}>
              <CharacterIcon row={character.row} character={character.icon} alt={character.icon} />
              <BarsGroup>
                <div style={{width: "75px"}}>

                </div>
              </BarsGroup>
              <StatsGroup> 
              <Stats 
                name={character.name}
                level={character.level}
                maxHP={character.maxHP}
                currentHP={character.currentHP}
                maxMP={character.maxMP}
                currentMP={character.currentMP}
              />
            </StatsGroup>
          </CharacterCard>
        )}
    </CharacterMenu>
  </div>
  <div style={{position: 'absolute', width: "160px", top: "20px", left: "480px"}}>
    <NavigationMenu {...args}>
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
    </NavigationMenu>
  </div>
  <div style={{position: 'absolute', width: "160px", top: "408px", left: "480px"}}>
    <Menu>
      <Grid>
        <Typography>
          Time
        </Typography>
        <Typography>
          8:41:41
        </Typography>
      </Grid>
      <Grid>
        <Typography>
          Gil
        </Typography>
        <Typography>
          9000
        </Typography>
      </Grid>
    </Menu>
  </div>
  <div style={{position: 'absolute', width: "320px", top: "496px", left: "320px"}}>
    <Menu>
        <Typography>
          Midgard Area
        </Typography>
    </Menu>
  </div>
</>

export const CharacterPage = MultipleBoxes.bind({});
CharacterPage.args = {
};